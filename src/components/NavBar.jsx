/* /src/components/NavBar.jsx  */

//Libraies
import React, { Component } from 'react';


class NavBar extends Component {

//Button Test Method
onSubmit(){
    alert("Button Clicked");
}
  render() {
    return (
    <div className="NavBar-Container">
      <h1 className="NavBar-Heading">{this.props.title}</h1>
      <button className="NavBar-Button">{this.props.button_label}</button>
    </div>
    );
  }
}

export default NavBar;