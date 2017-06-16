/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
//Components
import NavBar from  './NavBar.jsx'
import GpsField from './Eval_Parts/GpsField';
class Main extends Component {
  render() {

    return (
    <div className="Main-container">

      <NavBar />
      <div className="View">
      <GpsField />
      </div>
     
    </div>
    );
  }
}

export default Main;