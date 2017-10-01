/* /src/components/NavBar.jsx  */

//Libraries
import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <Container fluid>
        <div className="placeholder"/>
        <div className="navContainer">
          <Link to="/">
            <img  className="nav-img" src={require('../media/assets/Logo.png')} alt="logo" />
          </Link>
          <Link exact activeClassName="activeLink" to="/" className="link" >Home</Link>
          <Link activeClassName="activeLink" to="/Configurations" className="link">Configuration List</Link>
          <Link activeClassName="activeLink" to="/Evaluations" className="link">Evaluation List</Link>
        </div>
      </Container>
    );
  }
}

export default NavBar;
