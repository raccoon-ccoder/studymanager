import { app } from './firebase.js';
import { getAuth, signOut, setPersistence, signInWithPopup, GoogleAuthProvider, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// login.js
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

// logout.js
async function logoutUser() {
    const answer = confirm("로그아웃 하시겠습니까?");
    if(answer) {
        try {
            const auth = await getAuth();
            await signOut(auth);
            window.location.href = "login.html";
        } catch(err) {
            console.log(err);
        }
    }
}

async function loadProfile() {    
    try {
        const auth = await getAuth();
        onAuthStateChanged(auth, async(user) => {
            if(user) {
                const profile = document.querySelector(".header__profile");
                const id = user.email.replace("@gmail.com", "");

                profile.src = user.photoURL;
                profile.dataset.user = id;
            }else {
                window.location.href = "login.html";
            }
        });
    } catch(err) {
        console.log(err);
    }
}

// main-clock.js
function getTime() {
    const clock = document.querySelector(".header__time");
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}`;
}

export { loginUser, checkLogin, logoutUser, loadProfile,
    getTime
};