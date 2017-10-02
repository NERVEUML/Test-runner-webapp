/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';

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
 // Need lifecycle method for grabbing localStorage once its saved
 //componenDidMount()
 componentDidMount(){
   var myVal = localStorage.getItem(this.state.id);
   console.log(myVal);
   myVal = JSON.parse(myVal);
   if( myVal != null){
    let newTeamVal= myVal.teams;
    let newTaskVal= myVal.tasks;
    let newIdVal= myVal.id;

   console.log( newIdVal + ' ' + newTeamVal +  ' ' + newTaskVal) 

    this.setState({ id: newIdVal });
    console.log(this.state)
    this.setState({ teams: newTeamVal });
    console.log(this.state)
    this.setState({ tasks: newTaskVal });
   }
  console.log(this.state)
  
 }
 // local storage get item
  handleSubmit(event) {
    //alert('A team was submitted: ' + this.state.teams + this.state.tasks);
    this.setState((prevState, props) => ({
      id: prevState.id + 1
    })); 
    let value = JSON.stringify(this.state);
    console.log(value);
    //TODO add unique key while adding to local storage
    localStorage.setItem(this.state.id, value);

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
