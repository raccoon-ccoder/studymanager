import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyArZYMKpS8eG6u0xaV7CXMnZuCjTNIM744",
  authDomain: "studymanager-jy.firebaseapp.com",
  databaseURL: "https://studymanager-jy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studymanager-jy",
  storageBucket: "studymanager-jy.appspot.com",
  messagingSenderId: "504016003422",
  appId: "1:504016003422:web:ad40580d70516e84b26fcf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { app, db };