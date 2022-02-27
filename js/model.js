import { app, db } from './firebase.js';
import { getDatabase, ref, set, push, child, get } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
export { createSubject, readAllSubject, readTodaySubject, 
    createTodaySubject, updateTodaySubject };

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

async function createSubject(userId, subjectName) {
    try {
        const db = getDatabase();
        const newSubjectKey = push(ref(db, `subjects/${userId}/`)).key;
        await set(ref(db, `subjects/${id}/${newSubjectKey}`), {
            subject: subjectName,
            uid: newSubjectKey
        });
        const newSubject = {
            subject: subjectName,
            uid: newSubjectKey,
            time: "0h 0m"
        };
        return newSubject;
    } catch(err) {
        console.log(err);
    }
}

async function readAllSubject(userId) {
    // 결론적으로는 user 값이 세팅 되기전 함수가 실행되므로 값이 없다
    try {
        const dbRef = ref(getDatabase());
        const subjects = await get(child(dbRef, `subjects/${userId}`));
   
        if(subjects.exists()) {
            console.log("readAllSubject", subjects.val());
            return subjects.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function readTodaySubject(userId, today, subjectKey) {
    try {
        const dbRef = ref(getDatabase());
        const subject = await get(child(dbRef, `${userId}/${today}/${subjectKey}`));
        if(subject.exists()) {
            return subject.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}