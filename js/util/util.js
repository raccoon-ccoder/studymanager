function returnToday() {
    const day = new Date();
    const year = day.getFullYear();
    const month = String(day.getMonth() + 1).padStart(2,"0");
    const date = String(day.getDate()).padStart(2,"0");
    const today = `${year}-${month}-${date}`;

    return today;
}

function returnDate(today) {
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2,"0");
    const date = String(today.getDate()).padStart(2,"0");
    const day = `${year}-${month}-${date}`;

    return day;
}

function sumTime(totalTime, studyTime) {
    const totalHour = Number(totalTime.split(" ")[0].replace("h",""));
    const totalMinute = Number(totalTime.split(" ")[1].replace("m",""));

    const studyHour = Number(studyTime.split(" ")[0].replace("h",""));
    const studyMinute = Number(studyTime.split(" ")[1].replace("m",""));

    const min = Math.floor((totalMinute + studyMinute) % 60);
    const hour = Math.floor((totalMinute + studyMinute) / 60) + totalHour + studyHour;

    return `${hour}h ${min}m`;    
}

export { returnToday, returnDate, sumTime };