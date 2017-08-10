/* /src/components/TeamList.jsx  */

//Libraries
import React, { Component } from 'react';
import {Grid, Button, Segment, Label} from 'semantic-ui-react';
//Components


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
                  <Button primary>Edit</Button> <Button secondary>GPS</Button>
                  </Segment>
               </Grid.Column>
             </Grid.Row>

              </Grid>
            </div>
        );
}

class TeamList extends Component {
  render() {
    return (
      <div className="TeamList-container">
          <Team team='MIT' task='1-1' />
          <Team team='MIT' task='1-1' />
          <Team team='MIT' task='1-1' />
          <Team team='MIT' task='1-1' />

      </div>
    );
  }
}


export default TeamList;
