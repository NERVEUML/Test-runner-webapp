// Get gps coordinates for attempts
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    let latbox = position.coords.latitude;
    document.getElementById('input-lat').value = latbox;
    let longbox = position.coords.longitude;
    document.getElementById('input-long').value = longbox;
}
// Stopwatch

let seconds = 00;
let tens = 00;
let minutes = 00;
let goalTime = '';
let time = ''
let Interval;

function start() {
    event.preventDefault();
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

}

function stop() {
    event.preventDefault();
    document.getElementById('time').value = ` ${minutes}:${seconds}:${tens}`;
    clearInterval(Interval);
}
function goal (){
    event.preventDefault();
    document.getElementById('goaltime').value = ` ${minutes}:${seconds}:${tens}`;
}


function resetTime() {
    event.preventDefault();
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    document.getElementById('tens').innerHTML = tens;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("minutes").innerHTML = minutes
}



function startTimer() {
    console.log(`${minutes}:${seconds}:${tens}`)
    tens++;

    if (tens < 9) {
        document.getElementById('tens').innerHTML = "0" + tens;
    }
    if (tens > 9) {
        document.getElementById('tens').innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        document.getElementById("seconds").innerHTML = "0" + seconds;
        tens = 0;
        document.getElementById('tens').innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        document.getElementById("seconds").innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        document.getElementById("minutes").innerHTML = "0" + minutes;
        seconds = 0;
        document.getElementById("seconds").innerHTML = "0" + 0;
    }
    if (minutes > 9) {
        document.getElementById("minutes").innerHTML = minutes;
    }

}

// LOADING Configs into options menu
