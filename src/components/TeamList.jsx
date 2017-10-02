/* /src/components/TeamList.jsx  */

//Libraries
import React, { Component } from 'react';
import {Grid, Button, Segment, Label} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
//import localStorage from 'local-storage';
//Components

//TODO make the lists of teams and task generate automatically on new 
// TODO Save them to local Storage 


class TeamList extends Component {
  render() {
    
  //   const TeamComponents = Object.keys(this.props.list.id).map(function(run,index){
  //     return(
  //       <Team
  //         key={run.id}
  //         team={run.teams}
  //         task={run.tasks}
  //       />
  //     );
  // });
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
              <Grid  rows='equal' columns='equal'>
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
