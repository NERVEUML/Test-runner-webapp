/* /src/components/NavBar.jsx  */

//Libraries
import React, { Component } from 'react';
import { Container, Icon} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <Container fluid>
        <div className="placeholder"/>
        <div className="navContainer">
          <NavLink to="/">
            <img className="nav-img" src={require('../media/assets/Logo.png')} alt="logo" />
          </NavLink>
          <NavLink exact activeClassName="activeLink" to="/" className="link" >Home</NavLink>
          <NavLink activeClassName="activeLink" to="/Configurations" className="link">Configuration List</NavLink>
          <NavLink activeClassName="activeLink" to="/Evaluations" className="link">Evaluation List</NavLink>

          <div className='addConfiguration'>
            <NavLink to='/ConfigurationForm'> <Icon name="add square" size="huge" /> </NavLink>
          </div>
        </div>
      </Container>
    );
  }
}

export default NavBar;
