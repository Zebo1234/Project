const currentTime = new Date().getFullYear();

const newDate = new Date(`March 25 ${currentTime} 12:00:00`);

const daynumber = document.getElementById("daynum");
const hournumber = document.getElementById("hrnum");
const minsnumber = document.getElementById("minnum");
const secondsnumber = document.getElementById("secnum")

function updateTimer(){
    const presentTime = new Date();
    const distance = newDate - presentTime;

    const day = Math.floor(distance / 1000 / 60 / 60 / 24 );
    const hour = Math.floor(distance / 1000 / 60 / 60) % 24;
    const mins = Math.floor(distance / 1000 / 60 ) % 60;
    const secs = Math.floor(distance / 1000) % 60;

    daynumber.innerHTML = day;
    hournumber.innerHTML = hour;
    minsnumber.innerHTML = mins;
    secondsnumber.innerHTML = secs;


}

setInterval(updateTimer, 1000);


