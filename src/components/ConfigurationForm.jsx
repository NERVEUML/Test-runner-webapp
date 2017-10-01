/* /src/components/ConfigurationForm.jsx  */

//Libraries
import React, { Component } from 'react';
import NavBar from  './NavBar';
import {Form, Segment } from 'semantic-ui-react'
class ConfigurationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: 0,
      Name: '', 
      AirFrame:'',
      Rotors:'',
      FlightController:'',
      Battery:'',
      Height:'',
      Weight:''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState((prevState, props) => ({
      id: prevState.id + 1
    })); 
      event.preventDefault();
      console.log(this.state);

  }
  handleChange(event) {
    this.setState({ Name: event.target.value });
    this.setState({ AirFrame: event.target.value });
    this.setState({ Rotors: event.target.value });
    this.setState({ FlightController: event.target.value });
    this.setState({ Battery: event.target.value });
    this.setState({ Height: event.target.value });
    this.setState({ Weight: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <NavBar />
      <div className="ConfigurationForm-container">
        <Segment color='blue'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} label='Name' placeholder='SpaceShip' />
            <Form.Input onChange={this.handleChange} label='Air Frame' placeholder='airFrame' />
            <Form.Input onChange={this.handleChange} label='Rotors' placeholder='Rotors' />
          </Form.Group>
            <Form.Group inline>
              <Form.Input onChange={this.handleChange} label='Flight Controller' placeholder='Pixhawk' />
              <Form.Input onChange={this.handleChange} label='Battery' placeholder='s6' />
              <Form.Input onChange={this.handleChange} label='Height' placeholder='22' />
              <Form.Input onChange={this.handleChange} label='Weight' placeholder='4' />
          </Form.Group>
        <Form.Button primary>Save</Form.Button>
      </Form>
    </Segment>
      </div>
    </div>
    );
  }
}

export default ConfigurationForm;
