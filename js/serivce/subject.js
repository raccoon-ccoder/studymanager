import { createSubject, readAllSubject, readTodayTotal, readTodayAllSubject, removeTodaySubject } from '../model.js'
import { returnToday, returnDate, sumTime } from '../util/util.js';
import { startTimer } from './timer.js';

const HIDDEN_CLASSNAME = "hidden";
const VISIBLE_CLASSNAME = "visible";
const SELECTED_CLASSNAME = "selected";

function showModal() {
    const modalBox = document.querySelector(".modal");
    const inputBox = document.querySelector(".modal__write");
    modalBox.classList.add(VISIBLE_CLASSNAME);
    inputBox.focus();
}

function closeModal() {
    const modalBox = document.querySelector(".modal");
    modalBox.classList.remove(VISIBLE_CLASSNAME);
}

function removeSubject(event) {
    const answer = confirm("과목을 삭제하시겠습니까?\n(기록은 삭제되지 않습니다)");
    if(answer) {
        const subjectKey = event.target
        .closest(".card-item__middle")
        .previousElementSibling
        .firstElementChild
        .dataset
        .uid;

        const userId = localStorage.getItem("userId");
        removeTodaySubject(userId, subjectKey);
        event.target.closest(".card-item").remove();
        alert("과목이 삭제되었습니다.");
    }
}

async function doCreateSubject() {
    const subjectName = document.querySelector(".modal__write").value;
    document.querySelector(".modal__write").value = "";

    if(subjectName === "") {
        alert("과목명을 입력해주세요.");
        return;
    }

    const id = localStorage.getItem("userId");
    const newSubject = await createSubject(id, subjectName);
    createSubjectArticle(newSubject, true);
    closeModal();
}

function createSubjectArticle(subject, isToday) {
    const subjectContainer = document.querySelector(".card-list__subjects");
    const article = document.createElement("article");
    article.className = "card-item";

    const divTop = document.createElement("div");
    divTop.className = "card-item__top";

    const h3 = document.createElement("h3");
    h3.className = "card-item__title";
    h3.dataset.uid = subject.uid;
    h3.innerText = subject["subject"];

    if(subject["time"] === "0h 0m") {
        h3.dataset.firstRecord = "false";
    }else {
        h3.dataset.firstRecord = "true";
    }

    divTop.appendChild(h3);
    
    const divMiddle = document.createElement("div");
    divMiddle.className = "card-item__middle";

    const time = document.createElement("div");
    time.className = "card-item__time";

    const now = document.createElement("span");
    now.className = "card-item__now";
    now.innerText = subject["time"];
    
    time.appendChild(now);

    if(isToday) {
        const icons = document.createElement("div");
        icons.className = "card-item__icons";

        const timer = document.createElement("span");
        timer.classList.add("material-icons-outlined", "round-icon");
        timer.innerText = "play_circle";

        timer.addEventListener("click", startTimer);

        const dots = document.createElement("span");
        dots.classList.add("material-icons", "dots"); 
        dots.innerText = "more_vert";

        dots.addEventListener("click", removeSubject);

        icons.append(timer, dots);
        divMiddle.append(time, icons);

        article.append(divTop, divMiddle);
    }else {
        divMiddle.append(time);
        article.append(divTop, divMiddle);
    }
    subjectContainer.prepend(article);
}

async function loadAllSubject() {
    const userId = localStorage.getItem("userId");
    const today = returnToday();
    const subjects = await readAllSubject(userId);
    const periodButtons = document.querySelectorAll(".card-main__period");
    const selectedButton = document.querySelector(".card-main__period--day");
    
    periodButtons.forEach(button => button.classList.remove(SELECTED_CLASSNAME));
    selectedButton.classList.add(SELECTED_CLASSNAME);

    document.querySelector(".card-list__subjects").innerHTML = "";
    document.querySelector(".card-item__plus").classList.remove(HIDDEN_CLASSNAME);
    
    if(subjects) {
        const allSubjects = await readTodayAllSubject(userId, today);

        if(allSubjects) {
            for(let key in subjects) {
                if(allSubjects.hasOwnProperty(key)) {
                    createSubjectArticle(allSubjects[key], true);
                }else {
                    subjects[key]["time"] = "0h 0m";
                    createSubjectArticle(subjects[key], true);
                }
            }
        }else {
            for(let key in subjects) {
                subjects[key]["time"] = "0h 0m";
                createSubjectArticle(subjects[key], true);
            }
        }
    }
    const total = await readTodayTotal(userId, today);
    const totalHour = document.querySelector(".card-main__hour");
    const totalMinute = document.querySelector(".card-main__minute");

    if(total) {
        const hour = total["time"].split(" ")[0];
        const minute = total["time"].split(" ")[1];
        totalHour.innerText = hour;
        totalMinute.innerText = minute;
    }else {
        totalHour.innerText = "0h";
        totalMinute.innerText = "0m";
    }
}

async function readAllSubjectByPeriod(userId, period) {
    const allSubject = {};

    for(let i = 0;i < period;i++) {
        const today = new Date();
        const date = new Date(today.setDate(today.getDate() - i));
        const subjects = await readTodayAllSubject(userId, returnDate(date)); // { key: {value}, key : {value} }

        for(let key in subjects) {
            if(key === "total") {
                continue;
            }else if(allSubject.hasOwnProperty(key)) { // weekSubject에 중복 키가 있을 경우 
                allSubject[key]["time"] = sumTime(allSubject[key]["time"], subjects[key]["time"]);
            }else {
                allSubject[key] = subjects[key];
            }
        }
    }
    return allSubject;  // {subjectKey : {subject,time,uid}, subjectKey : {subject,time,uid}...}
}

async function readAllTotalByPeriod(userId, period) {
    let allTotal = "0h 0m";

    for(let i = 0;i < period;i++) {
        const today = new Date();
        const date = new Date(today.setDate(today.getDate() - i));
        const total = await readTodayTotal(userId, returnDate(date));   // {time : "0h 13m"}

        if(total) {
            allTotal = sumTime(allTotal, total["time"]);
        }
    }
    return allTotal;    // "10h 13m"
}

async function loadAllSubjectByPeriod(event) {
    document.querySelector(".card-list__subjects").innerHTML = "";
    document.querySelector(".card-item__plus").classList.add(HIDDEN_CLASSNAME);

    const periodButtons = document.querySelectorAll(".card-main__period");
    periodButtons.forEach(button => button.classList.remove(SELECTED_CLASSNAME));
    event.target.classList.add(SELECTED_CLASSNAME);

    const userId = localStorage.getItem("userId");
    const period = event.target.dataset.period;
    const allSubject = await readAllSubjectByPeriod(userId, period);
    const allTotal = await readAllTotalByPeriod(userId, period);

    Object.values(allSubject).map((subject) => createSubjectArticle(subject));

    const totalHour = document.querySelector(".card-main__hour");
    const totalMinute = document.querySelector(".card-main__minute");

    const hour = allTotal.split(" ")[0];
    const minute = allTotal.split(" ")[1];
    totalHour.innerText = hour;
    totalMinute.innerText = minute;
}

export { loadAllSubject, showModal, closeModal, doCreateSubject, loadAllSubjectByPeriod };