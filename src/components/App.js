/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import store from 'store';
//Components
import NavBar from  './NavBar.jsx';
import TeamForm from './TeamForm.jsx';
import TeamList from './TeamList';


let stateArray = [];

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            teams: '',
            tasks:''
        };


        store.each(function(value, key) {
            console.log(key, '==', value)
            stateArray.push(value);
        })

        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        for( var i in stateArray ){
            this.setState( {id: stateArray[i].id});
            this.setState( {teams: stateArray[i].teams});
            this.setState( {tasks: stateArray[i].tasks});
       }
    }
    handleSubmit(event) {
        this.setState((prevState, props) => ({
            id: prevState.id + 1
        }));
        store.set(this.state.id, this.state);
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
