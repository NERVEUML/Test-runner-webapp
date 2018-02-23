// Get gps coordinates for attempts
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,error);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function error (err){

window.alert(err);
console.log(`GPS ERROR: ${err}`);
}
function showPosition(position) {
    console.log(position.coords);

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

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

}

function stop() {

if(tens < 10)
    tens = "0"+tens;
if(seconds < 10)
    seconds = "0" +seconds;
if(minutes < 10 && minutes != 0)
    minutes = "0" + minutes;


    document.getElementById('time').value = ` ${minutes}:${seconds}:${tens}`;
    clearInterval(Interval);
}
function goal (){
if(tens < 10)
    tens = "0"+tens;
if(seconds < 10)
    seconds = "0" +seconds;
if(minutes < 10 && minutes != 0)
    minutes = "0" + minutes;

    document.getElementById('goaltime').value = ` ${minutes}:${seconds}:${tens}`;
}


function resetTime() {

    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    document.getElementById('tens').innerHTML = tens;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("minutes").innerHTML = minutes;
 document.getElementById('goaltime').value = " ";
 document.getElementById('time').value =" ";
}



function startTimer() {
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
