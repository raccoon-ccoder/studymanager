import { loginUser, checkLogin, logoutUser, loadProfile } from './serivce/user-auth.js';
import { getTime } from './serivce/clock.js';
import { loadMusic, justPlay, nextMusic, previousMusic, changeVolume } from './serivce/music.js';
import { loadAllSubject, showModal, closeModal, doCreateSubject, loadAllSubjectByPeriod } from './serivce/subject.js';
import { stopTimer, controlTimer } from './serivce/timer.js';

async function init() {
    const path = window.location.pathname;

    if(path === "/login.html") {
        checkLogin();
        const loginButton = document.querySelector(".login__text");
        loginButton.addEventListener("click", loginUser);
    }else {
        await loadProfile();
        await loadAllSubject();
        getTime(); 
        setInterval(getTime, 1000); // 시간 baselin 조정
        loadMusic();

        // 로그아웃
        const logoutButton = document.querySelector(".header__profile");
        logoutButton.addEventListener("click", logoutUser);

        // 노래 
        const audioPlayer = document.querySelector("#audioContainer");
        const playButton =  document.querySelector(".footer-music__player--play");
        const previousButton = document.querySelector(".footer-music__player--previous");
        const NextButton = document.querySelector(".footer-music__player--skip");
        const volumeChanger = document.querySelector(".footer-music__volume");

        audioPlayer.addEventListener("ended", nextMusic);
        playButton.addEventListener("click", justPlay);
        previousButton.addEventListener("click", previousMusic);
        NextButton.addEventListener("click", nextMusic);
        volumeChanger.addEventListener("change", changeVolume);

        // 과목 
        const plusButton = document.querySelector(".card-item__plus--button");
        const cancelButton = document.querySelector(".modal__button--cancel");
        const createButton = document.querySelector(".modal__button--save");

        plusButton.addEventListener("click", showModal);
        cancelButton.addEventListener("click", closeModal);
        createButton.addEventListener("click", doCreateSubject);

        // 타이머
        const pauseButton = document.querySelector(".timer-bottom__icon--pause");
        const stopButton = document.querySelector(".timer-bottom__icon--stop");
        const startButtons = document.querySelectorAll(".round-icon");

        pauseButton.addEventListener("click", controlTimer);
        stopButton.addEventListener("click", doStopTimer);

        // 기간별 공부기록 조회
        const periodButton = document.querySelector(".card-main__period--day");
        periodButton.addEventListener("click", loadAllSubject);
        const periodButtons = document.querySelectorAll(".card-main__period--not-day");
        periodButtons.forEach((btn) => {btn.addEventListener("click", loadAllSubjectByPeriod);});
    }
}

function doStopTimer() {
    stopTimer();
    loadAllSubject();
}

init();