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