const {format} = require('util');

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GOOGLE_CLOUD_PROJECT environment variable. See
// https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
// These environment variables are set automatically on Google App Engine
const {Storage} = require('@google-cloud/storage');

var config = {
  projectId: 'singular-arcana-304003',
  keyFilename: 'certs/storage_credentials.json'
}

// Instantiate a storage client
const storage = new Storage(config);

// A bucket is a container for objects (files).
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

// Process the file upload and upload to Google Cloud Storage.
module.exports = (file) => new Promise((resolve, reject) => {

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(`${Date.now()}-${file.originalname}`);
  const blobStream = blob.createWriteStream();

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    resolve(publicUrl);
  })
  .on('error', err => {
    console.log(err);
    reject(err);
  })
  .end(file.buffer);
});