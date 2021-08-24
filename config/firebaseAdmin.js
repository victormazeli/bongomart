const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

exports.firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  