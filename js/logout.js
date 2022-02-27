'use strict';
import { app } from './firebase.js';
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const logoutButton = document.querySelector(".header__profile");
logoutButton.addEventListener("click", logoutUser);

// 굳이 await이 필요하지 않아보이는데 사용한 이유 
// db 데이터 가져올 때 await 사용할 것

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

loadProfile();
