/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';
import TeamList from './TeamList';

const teams =[
  {team: 'team'}
]
const tasks =[
  {task: 'task'}
]
class Main extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      teams:[teams],
      team :'',
      tasks:[tasks],
      task: ''
    };
  }

  onSubmit(event){
    event.preventDefault();
    const teams = this.state.teams;
    const newTeam = {
      team: this.state.team
    }
    const tasks = this.state.tasks;
    const newCourse = {
      task: this.state.task
    }
    teams.push(newTeam);
    tasks.push(newCourse);
    this.setState({
      teams:[teams],
      team :'',
      tasks:[tasks],
      course: ''
    });
  }

  render() {

    return (
      <div className="Main-container">

        <NavBar />
        <Container textAlign='center'>
          <TeamForm onSubmit={this.onSubmit} />
          <TeamList />
        </Container>

      </div>
    );
  }
}

export default Main;
