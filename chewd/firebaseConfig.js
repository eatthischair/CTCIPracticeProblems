import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOeQEraYZLPz7TH2y6IiOPdig9K57hx3w",
  authDomain: "foodapp-415621.firebaseapp.com",
  projectId: "foodapp-415621",
  storageBucket: "foodapp-415621.appspot.com",
  messagingSenderId: "1086911555864",
  appId: "1:1086911555864:web:3abe6480927bc9f4f4566d",
  measurementId: "G-LMP6W254GX"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
