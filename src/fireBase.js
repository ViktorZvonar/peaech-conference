import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAmVost9Fm8M7Z0V3Rv6wHAz0yc2TBel3c',
  authDomain: 'peaech-93600.firebaseapp.com',
  projectId: 'peaech-93600',
  storageBucket: 'peaech-93600.appspot.com',
  messagingSenderId: '707957154036',
  appId: '1:707957154036:web:e394fa2dcfa5a03a023ea1',
  measurementId: 'G-7TJ84QH0J6',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
