const clockContainer = document.querySelector(".clock"),
clockBody = clockContainer.querySelector("h4");

function getTime(){
    const date = new Date();
    const hours = date.getHours() -8;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockBody.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ?  `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();