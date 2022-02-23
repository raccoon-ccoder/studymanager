// 'use strict';

const timerButton = document.querySelectorAll(".round-icon");

timerButton.forEach((item) => {
    item.addEventListener("click", startTimer);
});

let time;
let flag;

function startTimer(event) {
    const timerContainer = document.querySelector(".timer");
    timerContainer.classList.remove("hidden");

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

    const timerTitle = document.querySelector(".timer-top__title");
    timerTitle.innerText = subjectTitle;

    const hour = subjectTime.split(" ")[0].replace("h","");
    const minute = subjectTime.split(" ")[1].replace("m","");
    time =  hour * 60 + Number(minute);

    const timerTime = document.querySelector(".time-middle__chart--small");
    timerTime.innerText = `${hour}h ${minute}m`;
    flag = setInterval(updateTimer, 60000);
}

function updateTimer() {
    const hours = Math.floor(time / 60);
    const minutes = Math.floor(time % 60);

    const timerTime = document.querySelector(".time-middle__chart--small");
    timerTime.innerText = `${hours}h ${minutes}m`;
    time++;
}