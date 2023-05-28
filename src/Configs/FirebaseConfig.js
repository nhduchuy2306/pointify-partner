import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6aLXIrIHoGkRI10nDC2BnGQiojlAu66U",
  authDomain: "loginfirebase-12fc1.firebaseapp.com",
  databaseURL: "https://loginfirebase-12fc1-default-rtdb.firebaseio.com",
  projectId: "loginfirebase-12fc1",
  storageBucket: "loginfirebase-12fc1.appspot.com",
  messagingSenderId: "1041310495028",
  appId: "1:1041310495028:web:27ca55aff07ef0515c7561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}