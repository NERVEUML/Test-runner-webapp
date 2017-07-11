/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
//Components
import NavBar from  './NavBar.jsx';

class Main extends Component {
  render() {

    return (
      <div className="Main-container">

        <NavBar />
        <Container textAlign='center'>
        </Container>
     
      </div>
    );
  }
}

export default Main;