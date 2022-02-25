'use strict';
import { app, db } from './firebase.js';
import { getDatabase, ref, set, push, update } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
import { loadAllSubject } from './subject.js';
export { startTimer };

const pauseButton = document.querySelector(".timer-bottom__icon--pause");
const stopButton = document.querySelector(".timer-bottom__icon--stop");
const HIDDEN_CLASSNAME = "hidden";

pauseButton.addEventListener("click", controlTimer);
stopButton.addEventListener("click", stopTimer);

let time;
let timerFlag;
let chartFlag;
let workingTimer;

function startTimer(event) {
    workingTimer = true;

    const timerContainer = document.querySelector(".timer");
    timerContainer.classList.remove(HIDDEN_CLASSNAME);

    const subjectTime = event.target
    .parentElement
    .previousElementSibling
    .firstElementChild
    .innerText;

    const subjectTitle = event.target
    .closest(".card-item__middle")
    .previousElementSibling
    .firstElementChild
    .innerText;

    const subjectKey = event.target
    .closest(".card-item__middle")
    .previousElementSibling
    .firstElementChild
    .dataset
    .uid;

    const firstRecord = event.target
    .closest(".card-item__middle")
    .previousElementSibling
    .firstElementChild
    .dataset
    .firstRecord;

    const timerTitle = document.querySelector(".timer-top__title");
    timerTitle.innerText = subjectTitle;
    timerTitle.dataset.uid = subjectKey;
    timerTitle.dataset.firstRecord = firstRecord;

    const hour = subjectTime.split(" ")[0].replace("h","");
    const minute = subjectTime.split(" ")[1].replace("m","");
    time =  hour * 60 + Number(minute);

    const timerTime = document.querySelector(".time-middle__chart");
    timerTime.innerText = `${hour}h ${minute}m`;

    changeChart();
    timerFlag = setInterval(updateTimer, 60000);
    chartFlag = setInterval(changeChart, 60000);
}

function updateTimer() {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time % 60);

    const timerTime = document.querySelector(".time-middle__chart");
    timerTime.innerText = `${hours}h ${minutes}m`;
    time++;
}

function changeChart() {
    const minutes = Math.floor(time % 60);
    const percent = Math.floor(minutes / 60 * 100); 
    document.documentElement.style.setProperty("--chart-percent", percent);
}

function controlTimer() {
    const buttonText = document.querySelector(".timer-bottom__text--pause");
    
    if(workingTimer === true) {
        const pauseTimer = function() {
            workingTimer = false;
            clearInterval(timerFlag);
            clearInterval(chartFlag);
            pauseButton.innerText = "play_circle_outline";
            buttonText.innerText = "Restart";
        };
        pauseTimer();
    }else {
        const restartTimer = function() {
            workingTimer = true;
            timerFlag = setInterval(updateTimer, 60000);
            changeChart = setInterval(changeChart, 60000);
            pauseButton.innerText = "pause_circle";
            buttonText.innerText = "Pause";
        };
        restartTimer();
    }
}

function stopTimer(event) {
    clearInterval(timerFlag);
    clearInterval(chartFlag);

    const subjectKey = document.querySelector(".timer-top__title").dataset.uid;
    const subjectName = document.querySelector(".timer-top__title").innerText;
    const subjectTime = document.querySelector(".time-middle__chart").innerText;
    const firstRecord = document.querySelector(".timer-top__title").dataset.firstRecord;
    const id = document.querySelector(".header__profile").dataset.user;

    const day = new Date();
    const year = day.getFullYear();
    const month = String(day.getMonth()).padStart(2,"0");
    const date = String(day.getDate()).padStart(2,"0");
    const today = `${year}-${month}-${date}`;

    if(firstRecord === "true") {
        createTodaySubject(subjectName, subjectKey, subjectTime, today, id);
    }else {
        updateTodaySubject(subjectName, subjectKey, subjectTime, today, id);
    }
    loadAllSubject();
    const timerContainer = document.querySelector(".timer");
    timerContainer.classList.add(HIDDEN_CLASSNAME);
}

async function createTodaySubject(subjectName, subjectKey, subjectTime, today, id) {
    const db = getDatabase();
    try {
        await set(ref(db, `${id}/${today}/${subjectKey}`), {
            subject: subjectName,
            uid: subjectKey,
            time: subjectTime
        });
    }catch(err) {
        console.log(err);
    }
}

async function updateTodaySubject(subjectName, subjectKey, subjectTime, today, id) {
    const db = getDatabase();
    try {
        await update(ref(db, `${id}/${today}/${subjectKey}`), {
            subject: subjectName,
            uid: subjectKey,
            time: subjectTime
        });
    }catch(err) {
        console.log(err);
    }
}

