import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCF46CMpZqUUp932uHenkfZRPGk2gjBWw0",
  authDomain: "wallet-auth-b323a.firebaseapp.com",
  projectId: "wallet-auth-b323a",
  storageBucket: "wallet-auth-b323a.appspot.com",
  messagingSenderId: "783137803189",
  appId: "1:783137803189:web:c1aeecc6121acd27e327fc",
  measurementId: "G-7BF5VJQES7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}
