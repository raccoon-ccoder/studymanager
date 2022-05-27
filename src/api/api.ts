import { child, get, ref } from "firebase/database";
import { db } from "@api/firebase";

export async function readAllSubjectToStudy(userId: string) {
  try {
    const dbRef = ref(db);
    const subjects = await get(child(dbRef, `subjects/${userId}`));

    if (subjects.exists()) return subjects.val();
    else return;
  } catch (err) {
    console.log(err);
  }
}

export async function readTodayAllSubjectTime(userId: string, today: string) {
  try {
    const dbRef = ref(db);
    const subjects = await get(child(dbRef, `${userId}/${today}`));
    if (subjects.exists()) return subjects.val();
    else return;
  } catch (err) {
    console.log(err);
  }
}
