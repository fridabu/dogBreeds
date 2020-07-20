// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Firebase from "firebase";

// Loading the entire SDK is not efficient for production web apps.
// Use this option for development purposes only.
// var firebase = require("firebase");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

require("dotenv").config();

console.log(process.env.FIREBASE_PROJECT_ID);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "dog-breeds-36284",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

Firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export default db;
