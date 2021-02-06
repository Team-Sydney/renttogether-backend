const admin = require('firebase-admin');
const serviceAccount = require("../../cert/serviceAccountKey.json");
// Check if firebase admin has been initiated yet.
if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

module.exports = (token, msg) => {
    //Data we want to send the user
    let message = {
        data: {
            msg: msg,
            time: '2:45'
        },
        // Union field target can be only one of the following:
        // token: string,
        // topic: string,
        // condition: string
        token: token
    };
    admin.messaging().send(message) //message is the information we want to send the user
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        });
}