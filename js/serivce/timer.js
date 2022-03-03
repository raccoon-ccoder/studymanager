import { returnToday } from '../util/util.js';
import { createTodaySubject, updateTodaySubject, readTodayTotal, updateTodayTotal, createTodayTotal } from '../model.js';
export { startTimer, stopTimer, controlTimer };

const HIDDEN_CLASSNAME = "hidden";
const VISIBLE_CLASSNAME = "visible";

let time;
let previousTime;
let timerFlag;
let chartFlag;
let workingTimer;

function startTimer(event) {
    workingTimer = true;

    const timerContainer = document.querySelector(".timer");
    timerContainer.classList.add(VISIBLE_CLASSNAME);

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
    time =  Number(hour) * 60 + Number(minute);
    previousTime = Number(hour) * 60 + Number(minute);

    const timerTime = document.querySelector(".time-middle__chart");
    timerTime.innerText = `${hour}h ${minute}m`;

    changeChart();
    updateTimer();
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
    const pauseButton = document.querySelector(".timer-bottom__icon--pause");
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
    const id = document.querySelector(".header__profile").dataset.user;
    const firstRecord = document.querySelector(".timer-top__title").dataset.firstRecord;
    const today = returnToday();

    const timerContainer = document.querySelector(".timer");
    const pauseButton = document.querySelector(".timer-bottom__icon--pause");
    const buttonText = document.querySelector(".timer-bottom__text--pause");
    
    timerContainer.classList.remove(VISIBLE_CLASSNAME);
    pauseButton.innerText = "pause_circle";
    buttonText.innerText = "Pause";

    if(firstRecord === "true") {
        createTodaySubject(id, today, subjectKey, subjectName, subjectTime);
    }else {
        updateTodaySubject(id, today, subjectKey, subjectName, subjectTime);
    }

    const totalHour = Number(document.querySelector(".card-main__hour").innerText.replace("h",""));
    const totalMinute = Number(document.querySelector(".card-main__minute").innerText.replace("m","")) - 1;

    const total = time - previousTime + totalHour * 60 + totalMinute;
    const hours = Math.floor(total / 60);
    const minutes = Math.floor(total % 60);
    const totalTime = `${hours}h ${minutes}m`;
    const result = readTodayTotal(id, today);

    if(result) {
        updateTodayTotal(id, today, totalTime);
    } else {
        createTodayTotal(id, today, totalTime);
    }
}

