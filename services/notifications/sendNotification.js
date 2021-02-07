const admin = require('firebase-admin');
const serviceAccount = require("../../certs/firebase_credentials.json");
// Check if firebase admin has been initiated yet.
if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = (topic, msg) => {
    //Data we want to send the user
    let message = {
        data: {
            msg: msg,
        },
        topic: topic
    };
    admin.messaging().send(message) //message is the information we want to send the user
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message: ', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}