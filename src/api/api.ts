import { onValue, ref } from "firebase/database";
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
    // async & get() ver
    // const dbRef = ref(db);
    // const subjects = await get(child(dbRef, `subjects/${userId}`));
    // if (subjects.exists()) return subjects.val();
    // else return;
  } catch (err) {
    console.log(err);
  }
}

export async function readTodayAllSubjectTime(userId: string, today: string) {
  try {
    const subjectTimesArr: ISubjectTime[] = [];

    const subjectsRef = ref(db, `${userId}/${today}`);
    onValue(subjectsRef, (snapshot) => {
      snapshot.forEach((sub) => {
        subjectTimesArr.push(sub.val());
      });
    });
    return subjectTimesArr;
    // const dbRef = ref(db);
    // const subjects = await get(child(dbRef, `${userId}/${today}`));
    // if (subjects.exists()) return subjects.val();
    // else return;
  } catch (err) {
    console.log(err);
  }
}
