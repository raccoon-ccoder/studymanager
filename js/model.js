import { app, db } from './firebase.js';
import { getDatabase, ref, set, push, child, get, remove, update } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
export { createSubject, readAllSubject, readTodayAllSubject,
    createTodaySubject,removeTodaySubject, updateTodaySubject, 
    createTodayTotal, readTodayTotal, updateTodayTotal };

async function createSubject(userId, subjectName) {
    try {
        const newSubjectKey = push(ref(db, `subjects/${userId}/`)).key;
        await set(ref(db, `subjects/${userId}/${newSubjectKey}`), {
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
    try {
        const dbRef = ref(db);
        const subjects = await get(child(dbRef, `subjects/${userId}`));
   
        if(subjects.exists()) {
            return subjects.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function readTodayAllSubject(userId, today) {
    try {
        const dbRef = ref(db);
        const subject = await get(child(dbRef, `${userId}/${today}`));
        if(subject.exists()) {
            return subject.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function createTodaySubject(userId, today, subjectKey, subjectName, subjectTime) {
    try {
        await set(ref(db, `${userId}/${today}/${subjectKey}`), {
            subject: subjectName,
            uid: subjectKey,
            time: subjectTime
        });
    }catch(err) {
        console.log(err);
    }
}

async function removeTodaySubject(userId, subjectKey) {
    try {
        const subject = await remove(ref(db, `subjects/${userId}/${subjectKey}`));
    }catch(err) {
        console.log(err);
    }
}

async function updateTodaySubject(userId, today, subjectKey, subjectName, subjectTime) {
    try {
        await update(ref(db, `${userId}/${today}/${subjectKey}`), {
            subject: subjectName,
            uid: subjectKey,
            time: subjectTime
        });
    }catch(err) {
        console.log(err);
    }
}

async function createTodayTotal(userId, today, totalTime) {
    try {
        await set(ref(db, `${userId}/${today}/total`), {
            time : totalTime
        });
    } catch(err) {
        console.log(err);
    }
}

async function readTodayTotal(userId, today) {
    try {
        const dbRef = ref(db);
        const subject = await get(child(dbRef, `${userId}/${today}/total`));
        if(subject.exists()) {
            return subject.val();
        }else {
            return;
        }   
    } catch(err) {
        console.log(err);
    }
}

async function updateTodayTotal(userId, today, totalTime) {
    try {
        await update(ref(db, `${userId}/${today}/total`), {
            time : totalTime
        });
    } catch(err) {
        console.log(err);
    }
}