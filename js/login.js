'use strict';
import { app } from './firebase.js';
import { getAuth, setPersistence, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const loginButton = document.querySelector(".login__text");

loginButton.addEventListener("click", loginUser);
checkLogin();

async function loginUser() {    
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        await setPersistence(auth, browserLocalPersistence);
        await signInWithPopup(auth, provider);

        window.location.href = "index.html";
    } catch(err) {
        console.log(err);
    }
}

async function checkLogin() {
    try {
        const auth = getAuth();
        onAuthStateChanged(auth, async(user) => {
            if (user) window.location.href = "index.html";
        });
    } catch(err) {
        console.log(err);
    }
}
