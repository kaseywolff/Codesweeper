import { FIREBASE } from '../config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: FIREBASE.apiKey,
  authDomain: FIREBASE.authDomain,
  databaseURL: FIREBASE.databaseURL,
  projectId: FIREBASE.projectId,
  storageBucket: FIREBASE.storageBucket,
  messagingSenderId: FIREBASE.messagingSenderId,
  appId: FIREBASE.appId,
  measurementId: FIREBASE.measurementId
};

// initialize firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getDatabase();