const yearsEl = document.getElementById('years');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const countDown = '1 Jan 2025';

function countdown() {
    const countdownDate = new Date(countDown);
    const currentDate = new Date();

    const totalTime = (countdownDate - currentDate);
    const seconds = Math.floor(totalTime / 1000) % 60;
    const minutes = Math.floor(totalTime / 1000 / 60) % 60;
    const hours = Math.floor(totalTime / 1000 / 60 / 60) % 24;
    const days = Math.floor(totalTime / 1000 / 60 / 60 / 24) % 365;
    const years = Math.floor(totalTime / 1000 / 60 / 60 / 24 / 365);
    
    yearsEl.innerHTML = years;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);