
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    let result = `<table class="ui celled table">
    <thead>
      <tr><th>Latitude</th>
      <th>Longitude</th>
    </tr></thead>
    <tbody>
      <tr>
        <td>
            ${position.coords.latitude} 
        </td>
        <td>
            ${position.coords.longitude}
        </td>
      </tr>
    </tbody>
  </table>`
        
         console.log(result);
    document.getElementById('coords').innerHTML= result;
   
}