import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArZYMKpS8eG6u0xaV7CXMnZuCjTNIM744",
  authDomain: "studymanager-jy.firebaseapp.com",
  databaseURL: "https://studymanager-jy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studymanager-jy",
  storageBucket: "studymanager-jy.appspot.com",
  messagingSenderId: "504016003422",
  appId: "1:504016003422:web:ad40580d70516e84b26fcf"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
