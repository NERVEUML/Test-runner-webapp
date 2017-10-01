/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import localStorage from 'local-storage';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';
import TeamList from './TeamList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 0,
      teams: '', 
      tasks:''
  };
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A team was submitted: ' + this.state.teams + this.state.tasks);
    this.setState((prevState, props) => ({
      id: prevState.id + 1
    })); 
    
      event.preventDefault();
      console.log(this.state);

  }
  handleTeamChange(event) {
    this.setState({ teams: event.target.value });
  }
  handleTaskChange(event) {
    this.setState({ tasks: event.target.value });
  }
 
  render() {
    return (
      <div className="Main-container">
        <NavBar />
        <Container textAlign='center'>
          <TeamForm value={this.state.team} onTChange={this.handleTeamChange} onAChange={this.handleTaskChange} onSubmit={this.handleSubmit} />
          <TeamList list={this.state} />
        </Container>
      </div>
    );
  }
}

export default Main;
