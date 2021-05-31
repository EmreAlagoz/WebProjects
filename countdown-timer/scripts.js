const newYear = "15 June 2021";

const dayEl =  document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');

function countdowntimer() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYear);
    
    const totalSeconds = (newYearsDate-currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(secs);


    console.log(days,hours,mins,secs);
}
function formatTime(time) {
    if (time<10) {return `0${time}`;}
    else{return time;}
}   
countdowntimer();
setInterval(countdowntimer, 1000);
