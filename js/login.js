import { app } from './firebase.js';
import { getAuth, setPersistence, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const loginButton = document.querySelector(".login__text");
loginButton.addEventListener("click", loginUser);

async function loginUser() {    
    try {
        const auth = await getAuth();
        await setPersistence(auth, browserLocalPersistence);
        
        const provider = new GoogleAuthProvider();
        onAuthStateChanged(auth, async(user) => {
            if (user) {
                window.location.href = "index.html";
            } else {
                await signInWithPopup(auth, provider);
                window.location.href = "index.html";
            }
        });
    } catch(err) {
        console.log(err);
    }
}
