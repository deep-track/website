// firebaseConfig.ts

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';
// import { getAnalytics, Analytics } from 'firebase/analytics'; // Optional if you need analytics

// Define the shape of the config object
const firebaseConfig: Record<string, string> = {
  apiKey: "AIzaSyDrUnwOcxeHMZFsFLaP0Cwe0Vqjziws6eE",
  authDomain: "deeptrackwebsite.firebaseapp.com",
  projectId: "deeptrackwebsite",
  storageBucket: "deeptrackwebsite.firebasestorage.app",
  messagingSenderId: "152996942831",
  appId: "1:152996942831:web:b97e59f27f5e68d4665c1a",
  measurementId: "G-6XW6P4ZHVQ",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
// const analytics: Analytics = getAnalytics(app); // Optional if needed
const db: Database = getDatabase(app);

export { db };
