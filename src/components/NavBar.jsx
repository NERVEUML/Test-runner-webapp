/* /src/components/NavBar.jsx  */

//Libraies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {

//Button Test Method
onSubmit(){
    alert("Button Clicked");
}
  render() {
    return (
        <div className="navContainer">
          <NavLink exact activeClassName="activeLink" to="/" className="link" >Home</NavLink>
          <NavLink activeClassName="activeLink" to="/Configurations" className="link">Configuration List</NavLink>
          <NavLink activeClassName="activeLink" to="/Evaluations" className="link">Evaluation List</NavLink>
        </div>
    );
  }
}

export default NavBar;