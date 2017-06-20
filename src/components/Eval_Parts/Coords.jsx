/* /src/components/Eval_Parts/Coords.jsx  */

//Libraries
import React from 'react';
import {geolocated} from 'react-geolocated';

class Coords extends React.Component {
  
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table className="gps-data">
            <tbody>
              <tr><td>latitude: </td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude: </td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000
})(Coords);