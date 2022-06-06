import { child, get, onValue, ref } from "firebase/database";
import { db } from "@api/firebase";

export interface ISubject {
  subject: string;
  uid: string;
}

export interface ISubjectTime {
  subject: string;
  time: number;
  uid: string;
}

export interface ITotalTime {
  time: number;
}

export function readAllSubjectToStudy(userId: string) {
  try {
    const subjectsArr: ISubject[] = [];

    const subjectsRef = ref(db, `subjects/${userId}`);
    onValue(subjectsRef, (snapshot) => {
      snapshot.forEach((sub) => {
        subjectsArr.push(sub.val());
      });
    });
    return subjectsArr;
  } catch (err) {
    console.log(err);
  }
}

export function readTodayAllSubjectTime(userId: string, today: string) {
  try {
    const subjectTimesArr: ISubjectTime[] = [];

    const subjectsRef = ref(db, `${userId}/${today}`);
    onValue(subjectsRef, (snapshot) => {
      snapshot.forEach((sub) => {
        subjectTimesArr.push(sub.val());
      });
    });
    return subjectTimesArr;
  } catch (err) {
    console.log(err);
  }
}

export async function readSubjectTotalTime(userId: string, date: string) {
  try {
    const subjectTotalTimeRef = ref(db);
    const data = await get(
      child(subjectTotalTimeRef, `${userId}/${date}/total`)
    );
    console.log(data.val());
    return data.val();
  } catch (err) {
    console.log(err);
  }
}
