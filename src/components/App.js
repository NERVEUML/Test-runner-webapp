/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';
class Main extends Component {
constructor(props){
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(event){

}

  render() {

    return (
      <div className="Main-container">

        <NavBar />
        <Container textAlign='center'>
          <TeamForm onSubmit={this.onSubmit} />
        </Container>
     
      </div>
    );
  }
}

export default Main;