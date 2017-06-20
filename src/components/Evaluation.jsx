/* /src/components/Evaluation.jsx  */

//Libraries
import React, { Component } from 'react';
import {Grid, Segment, Container , Header, Icon} from 'semantic-ui-react';

//Components
import GpsField from './Eval_Parts/GpsField';
import ResultForm from './Eval_Parts/ResultForm';
import Stopwatch from './Eval_Parts/Stopwatch';
class EvaluationForm extends Component {
// Eval still needs place for run and Attempts numbers
  render() {

    return (
      <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='book' />
            Evaluation Form
          <Header.Subheader>
            Log all of the task statistics here.
          </Header.Subheader>
        </Header>
        <Grid rows={3} relaxed>
          <Grid.Row>
            <Segment color='green'>
              <GpsField />
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment color='blue'>
              <ResultForm />
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Segment color='purple'>
              <Stopwatch />
            </Segment>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default EvaluationForm;