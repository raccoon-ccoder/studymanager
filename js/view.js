import { loginUser, checkLogin, logoutUser, loadProfile } from './serivce/user-auth.js';
import { getTime } from './serivce/clock.js';
import { loadMusic, justPlay, nextMusic, previousMusic, changeVolume } from './serivce/music.js';
import { loadAllSubject, showModal, closeModal, doCreateSubject } from './serivce/subject.js';
import { startTimer, stopTimer, controlTimer } from './serivce/timer.js';

function init() {
    // path 가져오기
    console.log(window.location.pathname);
    const path = window.location.pathname;

    if(path === "/login.html") {
        checkLogin();
        const loginButton = document.querySelector(".login__text");
        loginButton.addEventListener("click", loginUser);
    }else {
        loadProfile();
        getTime(); 
        setInterval(getTime, 1000); // 시간 baselin 조정
        // loadMusic();
        loadAllSubject();
    }
}

init();


// // 로그인 화면
// const loginButton = document.querySelector(".login__text");

// loginButton.addEventListener("click", loginUser);
// checkLogin();

// // index.html
// // 로그아웃 기능
// const logoutButton = document.querySelector(".header__profile");
// logoutButton.addEventListener("click", logoutUser);

// // 노래 
// const audioPlayer = document.querySelector("#audioContainer");
// const playButton =  document.querySelector(".footer-music__player--play");
// const previousButton = document.querySelector(".footer-music__player--previous");
// const NextButton = document.querySelector(".footer-music__player--skip");
// const musicName = document.querySelector(".footer-music__name");
// const volumeChanger = document.querySelector(".footer-music__volume");

// audioPlayer.addEventListener("ended", nextMusic);
// playButton.addEventListener("click", justPlay);
// previousButton.addEventListener("click", previousMusic);
// NextButton.addEventListener("click", nextMusic);
// volumeChanger.addEventListener("change", changeVolume);

// // 과목 
// const plusButton = document.querySelector(".card-item__plus--button");
// const cancelButton = document.querySelector(".modal__button--cancel");
// const createButton = document.querySelector(".modal__button--save");

// const HIDDEN_CLASSNAME = "hidden";

// plusButton.addEventListener("click", showModal);
// cancelButton.addEventListener("click", closeModal);
// createButton.addEventListener("click", doCreateSubject);

// // 타이머
// const pauseButton = document.querySelector(".timer-bottom__icon--pause");
// const stopButton = document.querySelector(".timer-bottom__icon--stop");
// const startButtons = document.querySelectorAll(".round-icon");

// pauseButton.addEventListener("click", controlTimer);
// stopButton.addEventListener("click", stopTimer);
// // stopTimer 후에 loadAllSubject 필요하므로 새로운 함수 만들어서 적용

// startButtons.forEach((button) => {
//     button.addEventListener("click", startTimer);
// });

// // 가장 먼저 수행되어야 함
// loadProfile();
// getTime(); 
// setInterval(getTime, 1000); // 시간 baselin 조정
// loadMusic();
// loadAllSubject();