import { app, db } from './firebase.js';
import { getDatabase, ref, set, push, child, get, update } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
export { createSubject, readAllSubject, 
    createTodaySubject, readTodaySubject, updateTodaySubject, 
    createTodayTotal, readTodayTotal, updateTodayTotal,
    readTodayAllSubject };

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
    try {
        const dbRef = ref(getDatabase());
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
        const dbRef = ref(getDatabase());
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

async function createTodaySubject(subjectName, subjectKey, subjectTime, today, userId) {
    const db = getDatabase();
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

async function updateTodaySubject(subjectName, subjectKey, subjectTime, today, id) {
    try {
        const db = getDatabase();
        await update(ref(db, `${id}/${today}/${subjectKey}`), {
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
        const db = getDatabase();
        await set(ref(db, `${userId}/${today}/total`), {
            time : totalTime
        });
    } catch(err) {
        console.log(err);
    }
}

async function readTodayTotal(userId, today) {
    try {
        const dbRef = ref(getDatabase());
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
        const db = getDatabase();
        await update(ref(db, `${userId}/${today}/total`), {
            time : totalTime
        });
    } catch(err) {
        console.log(err);
    }
}