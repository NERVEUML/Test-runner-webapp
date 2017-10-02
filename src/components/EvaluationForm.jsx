/* /src/components/EvaluationForm.jsx  */

//Libraries
import React, { Component } from 'react';
import { Segment, Container , Header, Icon,Form} from 'semantic-ui-react';


import NavBar from './NavBar';
import Stopwatch from './Eval_Parts/Stopwatch';

const optionsForResult = [
  { key: 'r', text: 'Return to Start', value: 'ReturnToStart' },
  { key: 'tcnc', text: 'Team Call, Non Crash', value: 'Team Call Non Crash' },
  { key: 'tc', text: 'Team Call, Crash', value: 'Team Call Crash' },
  { key: 'eb', text: 'Elevation Break', value: 'Elevation Break' },
  { key: 'sc', text: 'Saftey Call', value: 'Saftey Call' },
]
const optionsForSuccessPercentage = [
  { key: 'z', text: '0%', value: '0' },
  { key: 'tf', text: '25%', value: '25' },
  { key: 'f', text: '50%', value: '50' },
  { key: 'sf', text: '75%', value: '75' },
  { key: 'oh', text: '100%', value: '100' },
]

class EvaluationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      Name: '',
      Result: '',
      Success: '',
      Notes: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
    this.handleSuccessChange = this.handleSuccessChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState((prevState, props) => ({
      id: prevState.id + 1
    }));
    event.preventDefault();
    console.log(this.state);

  }
  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }

  handleResultChange(event ,{value}){
    var result = {value};
    this.setState({ Result: result.value });
  }
  handleSuccessChange(event, {value}){
    var success = {value};
    this.setState({ Success: success.value });
  }
  handleNotesChange(event){
    this.setState({ Notes: event.target.value });
  }
  render() {
    return (
      <div>
      <NavBar />
      <div className="ConfigurationForm-container">
      <Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='book' />
          Evaluation Form
          <Header.Subheader>
            Log all of the task statistics here.
          </Header.Subheader>
        </Header>
        </Container>
      <Segment color='blue'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleNameChange} label='Name' placeholder='Nerve' />
            <Form.Select onChange={this.handleResultChange} label='Result'  options={optionsForResult} placeholder='Result' />
            <Form.Select onChange={this.handleSuccessChange} label='Success' options={optionsForSuccessPercentage}placeholder='Succes Rate' />
            <Form.TextArea onChange={this.handleNotesChange} label='Notes' placeholder='What Else Happended ....' />
            </Form.Group>
          <Form.Button primary>Save</Form.Button>
        </Form>
        <Segment color='purple'>
          <Stopwatch />
        </Segment>
      </Segment>
    </div>
   </div>
    );
  }
}

export default EvaluationForm;
