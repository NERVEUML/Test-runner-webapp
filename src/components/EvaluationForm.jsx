/* /src/components/EvaluationForm.jsx  */

//Libraries
import React, { Component } from 'react';
import {Grid, Segment, Container , Header, Icon,Form} from 'semantic-ui-react';


import ResultForm from './Eval_Parts/ResultForm';
import Stopwatch from './Eval_Parts/Stopwatch';
class EvaluationForm extends Component {
  render() {
    return (
      <div className="EvaluationForm-container">
       <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='book' />
            Evaluation Form
          <Header.Subheader>
            Log all of the task statistics here.
          </Header.Subheader>
        </Header>
        <Grid rows={2} relaxed>
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
        <Form>
          <Form.Button primary>Save</Form.Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default EvaluationForm;
