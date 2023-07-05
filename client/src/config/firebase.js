import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCj1qRHx-30FNy7GaIhQjiuo1BI8L_tzmU",
  authDomain: "coin-info-react.firebaseapp.com",
  projectId: "coin-info-react",
  storageBucket: "coin-info-react.appspot.com",
  messagingSenderId: "664323915618",
  appId: "1:664323915618:web:fbc0131b84a0dbc2cfb63b",
  measurementId: "G-D426JT0DMG",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
