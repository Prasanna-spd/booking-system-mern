const admin = require('firebase-admin');
const { FIREBASE_CREDENTIALS_PATH } = process.env;

const serviceAccount = require(FIREBASE_CREDENTIALS_PATH);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<your-project-id>.firebaseio.com" // Update with your Firebase project URL
});

const db = admin.firestore();
module.exports = { admin, db };
