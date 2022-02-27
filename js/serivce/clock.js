'use strict';
function getTime() {
    const clock = document.querySelector(".header__time");
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}`;
}

export { getTime };