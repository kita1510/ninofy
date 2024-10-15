import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVtttdbQA3EB9AjKVZ8aSc-o9L0UOgcmw",
  authDomain: "ninofy-f0e59.firebaseapp.com",
  projectId: "ninofy-f0e59",
  storageBucket: "ninofy-f0e59.appspot.com",
  messagingSenderId: "793669472855",
  appId: "1:793669472855:web:9ff66e50bb615764510912",
  measurementId: "G-VD6RTBN8MJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
