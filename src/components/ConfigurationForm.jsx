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
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAirFrameChange = this.handleAirFrameChange.bind(this);
    this.handleRotorsChange = this.handleRotorsChange.bind(this);
    this.handleFlightControllerChange = this.handleFlightControllerChange.bind(this);
    this.handleBatteryChange = this.handleBatteryChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
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
  handleAirFrameChange(event){
    this.setState({ AirFrame: event.target.value });
  }
  handleRotorsChange(event){
    this.setState({ Rotors: event.target.value });
  }
  handleFlightControllerChange(event){
    this.setState({ FlightController: event.target.value });
  }
  handleBatteryChange(event){
    this.setState({ Battery: event.target.value });
  }
  handleWeightChange(event){
    this.setState({ Weight: event.target.value });
  }
  handleHeightChange(event){
    this.setState({ Height: event.target.value });
  }
  render() {
    return (
      <div>
        <NavBar />
      <div className="ConfigurationForm-container">
        <Segment color='blue'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleNameChange} label='Name' placeholder='SpaceShip' />
            <Form.Input onChange={this.handleAirFrameChange} label='Air Frame' placeholder='airFrame' />
            <Form.Input onChange={this.handleRotorsChange} label='Rotors' placeholder='Rotors' />
          </Form.Group>
            <Form.Group inline>
              <Form.Input onChange={this.handleFlightControllerChange} label='Flight Controller' placeholder='Pixhawk' />
              <Form.Input onChange={this.handleBatteryChange} label='Battery' placeholder='s6' />
              <Form.Input onChange={this.handleHeightChange} label='Height' placeholder='22' />
              <Form.Input onChange={this.handleWeightChange} label='Weight' placeholder='4' />
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
