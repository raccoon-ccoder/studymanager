'use strict';
import { app, db } from './firebase.js';
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

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
        const auth = getAuth();
        const user = auth.currentUser;
        if(user) {
            const id = user.email.replace("@gmail.com", "");
            const db = getDatabase();
            const newSubjectKey = push(ref(db, `subjects/${id}/`)).key;
            await set(ref(db, `subjects/${id}/${newSubjectKey}`), {
                subject: subjectName
            });
            createSubjectArticle(subjectName);
            closeModal();
        }
    } catch(err) {
        console.log(err);
    }
}

function createSubjectArticle(subjectName) {
    const subjectContainer = document.querySelector(".card-list");
    const article = document.createElement("article");
    article.className = "card-item";

    const divTop = document.createElement("div");
    divTop.className = "card-item__top";

    const h3 = document.createElement("h3");
    h3.className = "card-item__title";
    h3.innerText = subjectName;

    divTop.appendChild(h3);
    
    const divMiddle = document.createElement("div");
    divMiddle.className = "card-item__middle";

    const time = document.createElement("div");
    time.className = "card-item__time";

    const now = document.createElement("span");
    now.className = "card-item__now";
    now.innerText = "0h 0m";

    time.appendChild(now);

    const icons = document.createElement("div");
    icons.className = "card-item__icons";

    const timer = document.createElement("span");
    timer.classList.add("material-icons-outlined", "round-icon");
    timer.innerText = "play_circle";

    const dots = document.createElement("span");
    timer.classList.add("material-icons", "dots"); 
    timer.innerText = "more_vert";

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
