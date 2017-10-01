/* /src/components/TeamList.jsx  */

//Libraries
import React, { Component } from 'react';
import {Grid, Button, Segment, Label} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import localStorage from 'local-storage';
//Components

//TODO make the lists of teams and task generate automatically on new 
// TODO Save them to local Storage 


class TeamList extends Component {
  render() {
    
    console.log(this.state);
    // const  TeamComponents = myState.map((state) => (
    //   <Team
    //     key={'state-' + state.id}
    //     team={state.team}
    //     task={state.task}
    //   />
    // ));
    return (
      
      <div className="TeamList-container">
        <Team  team="Mit"  task="1-1"/>

      </div>
    );
  }
}

const Team = (props) => {
        return (
            <div className="team">
              <Grid  rows='equl' columns='equal'>
                <Grid.Row>
                <Grid.Column>
                  <Segment>
                   <Label> {props.team} </Label>
                   </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment>
                   <Label> {props.task} </Label>
                   </Segment>
               </Grid.Column>
               <Grid.Column>
                 <Segment>
                    <NavLink to="/EvaluationForm" className="link"><Button primary>Edit</Button></NavLink>
                    <NavLink to="/GPSForm" className="link"> <Button secondary>GPS</Button></NavLink>
                  </Segment>
               </Grid.Column>
             </Grid.Row>

              </Grid>
            </div>
        );
}




export default TeamList;
