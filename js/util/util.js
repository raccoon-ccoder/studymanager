function returnToday() {
    const day = new Date();
    const year = day.getFullYear();
    const month = String(day.getMonth()).padStart(2,"0");
    const date = String(day.getDate()).padStart(2,"0");
    const today = `${year}-${month}-${date}`;

    return today;
}

export { returnToday };