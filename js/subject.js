'use strict';
import { app, db } from './firebase.js';
import {startTimer} from './timer.js';
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getDatabase, ref, set, push, child, get } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
export { loadAllSubject };

const plusButton = document.querySelector(".card-item__plus--button");
const cancelButton = document.querySelector(".modal__button--cancel");
const createButton = document.querySelector(".modal__button--save");

const HIDDEN_CLASSNAME = "hidden";

plusButton.addEventListener("click", showModal);
cancelButton.addEventListener("click", closeModal);
createButton.addEventListener("click", createSubject);

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

async function createSubject() {
    const subjectName = document.querySelector(".modal__write").value;
    document.querySelector(".modal__write").value = "";

    if(subjectName === "") {
        alert("과목명을 입력해주세요.");
        return;
    }

    try {
        const id = document.querySelector(".header__profile").dataset.user;
        const db = getDatabase();
        const newSubjectKey = push(ref(db, `subjects/${id}/`)).key;
        await set(ref(db, `subjects/${id}/${newSubjectKey}`), {
            subject: subjectName,
            uid: newSubjectKey
        });
        const newSubject = {
            subject: subjectName,
            uid: newSubjectKey,
            time: "0h 0m"
        };
        createSubjectArticle(newSubject);
        closeModal();
    } catch(err) {
        console.log(err);
    }
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

    timer.addEventListener("click", startTimer);

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

async function readAllSubject() {
    const id = document.querySelector(".header__profile").dataset.user;

    try {
        const dbRef = ref(getDatabase());
        const subjects = await get(child(dbRef, `subjects/${id}`));
  
        if(subjects.exists()) {
            return subjects.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function todaySubjectRecord(subjectKey) {
    const id = document.querySelector(".header__profile").dataset.user;
    
    const day = new Date();
    const year = day.getFullYear();
    const month = String(day.getMonth()).padStart(2,"0");
    const date = String(day.getDate()).padStart(2,"0");
    const today = `${year}-${month}-${date}`;

    try {
        const dbRef = ref(getDatabase());
        const subject = await get(child(dbRef, `${id}/${today}/${subjectKey}`));
        if(subject.exists()) {
            return subject.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function loadAllSubject() {
    const subjects = await readAllSubject();
    console.log(subjects);
    const id = document.querySelector(".header__profile").dataset.user;
    // 과목이 1개라도 존재하는 경우
    if(subjects) {
        let subjectList = {};
        if(subjects[id] !== undefined) {
            console.log("true");
            Object.assign(subjectList, subjects[id]);
            console.log(subjectList);
        }else {
            console.log("false");
            Object.assign(subjectList, subjects);
            console.log(subjectList);
        }
   
        const userSubjectList = Object.keys(subjectList)
        .map(async(subject) => {
            const result = await todaySubjectRecord(subject);
            if(result) {
                return result; // {subject, uid, time}
            }else {
                return subjectList[subject]; // {subject, uid}
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

loadAllSubject();