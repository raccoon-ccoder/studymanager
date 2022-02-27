'use strict';
import { createSubject, readAllSubject, readTodaySubject } from '../model.js'
import { returnToday } from '../util/util.js';

function showModal() {
    const modalBox = document.querySelector(".modal");
    const inputBox = document.querySelector(".modal__write");
    modalBox.classList.remove(HIDDEN_CLASSNAME);
    inputBox.focus();
}

function closeModal() {
    const modalBox = document.querySelector(".modal");
    modalBox.classList.add(HIDDEN_CLASSNAME);
}

async function doCreateSubject() {
    const subjectName = document.querySelector(".modal__write").value;
    document.querySelector(".modal__write").value = "";

    if(subjectName === "") {
        alert("과목명을 입력해주세요.");
        return;
    }

    const id = document.querySelector(".header__profile").dataset.user;
    const newSubject = createSubject(id, subjectName);
    createSubjectArticle(newSubject);
    closeModal();
}

function createSubjectArticle(subject) {
    const subjectContainer = document.querySelector(".card-list__subjects");
    const article = document.createElement("article");
    article.className = "card-item";

    const divTop = document.createElement("div");
    divTop.className = "card-item__top";

    const h3 = document.createElement("h3");
    h3.className = "card-item__title";
    h3.dataset.uid = subject.uid;
    h3.innerText = subject["subject"];

    divTop.appendChild(h3);
    
    const divMiddle = document.createElement("div");
    divMiddle.className = "card-item__middle";

    const time = document.createElement("div");
    time.className = "card-item__time";

    const now = document.createElement("span");
    now.className = "card-item__now";
    if(subject["time"] !== undefined) {
        now.innerText = subject["time"];
        h3.dataset.firstRecord = "false";
    }else {
        now.innerText = "0h 0m";
        h3.dataset.firstRecord = "true";
    }
    
    time.appendChild(now);

    const icons = document.createElement("div");
    icons.className = "card-item__icons";

    const timer = document.createElement("span");
    timer.classList.add("material-icons-outlined", "round-icon");
    timer.innerText = "play_circle";

    // timer.addEventListener("click", startTimer);

    const dots = document.createElement("span");
    dots.classList.add("material-icons", "dots"); 
    dots.innerText = "more_vert";

    icons.append(timer, dots);
    divMiddle.append(time, icons);

    const divBottom = document.createElement("div");
    divBottom.className = "card-item__bottom";

    const previousSubject = document.createElement("span");
    previousSubject.className = "card-item__previous";
    previousSubject.innerText = "Previous - 0h 0m";

    divBottom.appendChild(previousSubject);
    article.append(divTop, divMiddle, divBottom);

    subjectContainer.prepend(article);
}

async function loadAllSubject() {
    const id = document.querySelector(".header__profile").dataset.user;
    const today = returnToday();
    const subjects = await readAllSubject(id);

    // 과목이 1개라도 존재하는 경우
    if(subjects) {
        const userSubjectList = Object.keys(subjects)
        .map(async(subject) => {
            const result = await readTodaySubject(id, today, subject);
            if(result) {
                return result; // {subject, uid, time}
            }else {
                return subjects[subject]; // {subject, uid}
            }
        });

        const subjectContainer = document.querySelector(".card-list__subjects");
        subjectContainer.innerHTML = "";
        userSubjectList.map((subject) => {
            subject.then((res) => {
                createSubjectArticle(res);
            });
        });
    }
}

export { loadAllSubject, showModal, closeModal, doCreateSubject };