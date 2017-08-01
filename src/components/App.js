/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';

const teams =[
  {team: 'team'}
]
const courses =[
  {course: 'course'}
]
class Main extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      teams:[teams],
      team :'',
      courses:[courses],
      course: ''
    };
  }

  onSubmit(event){
    event.preventDefault();
    const teams = this.state.teams;
    const newTeam = {
      team: this.state.team
    }
    const courses = this.state.courses;
    const newCourse = {
      course: this.state.course
    }
    teams.push(newTeam);
    courses.push(newCourse);
    this.setState({
      teams:[teams],
      team :'',
      courses:[courses],
      course: ''
    });
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
