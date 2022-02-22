// import { app } from './firebase.js';
// import { getAuth,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";


// const profile = document.querySelector(".header__profile");

// function loadProfile() {    
//     const profile = document.querySelector(".header__profile");
//     const auth = getAuth();

//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             profile.src = user.photoURL;
//         } else {
//             window.location.href = "login.html";
//         }
//     });
// }

// loadProfile();


// function logoutUser() {
//     const answer = confirm("로그아웃 하시겠습니까?");
//     if(answer) {
//         const auth = getAuth();
//         signOut(auth)
//         .then(window.location.href = "login.html")
//         .catch((er) => er);
//     }
// }