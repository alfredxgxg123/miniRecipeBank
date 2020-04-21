// firebase.js
import * as firebase from 'firebase';
import Environment from './environment';

firebase.initializeApp({
  apiKey: Environment.staging.FIREBASE_API_KEY,
  authDomain: Environment.staging.FIREBASE_AUTH_DOMAIN,
  databaseURL: Environment.staging.FIREBASE_DATABASE_URL,
  projectId: Environment.staging.FIREBASE_PROJECT_ID,
  storageBucket: Environment.staging.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Environment.staging.FIREBASE_MESSAGING_SENDER_ID,
});
export default firebase;
