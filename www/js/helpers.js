
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    let result = `<p> Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude} </p>`
    console.log(result);
    document.getElementById('coords').innerHTML= result;
   
}