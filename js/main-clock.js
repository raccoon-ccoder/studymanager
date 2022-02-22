const clock = document.querySelector(".header__time");
function getTime() {
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}`;
}

getTime();
setInterval(getTime, 1000);
// 시간 baselin 조정