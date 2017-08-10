/* /src/components/ConfigurationForm.jsx  */

//Libraries
import React, { Component } from 'react';
import NavBar from  './NavBar';
import {Form, Segment } from 'semantic-ui-react'
class ConfigurationForm extends Component {
  render() {
    return (
      <div>
        <NavBar />
      <div className="ConfigurationForm-container">
        <Segment color='blue'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='Name' placeholder='SpaceShip' />
            <Form.Input label='Air Frame' placeholder='airFrame' />
            <Form.Input label='Rotors' placeholder='Rotors' />
          </Form.Group>
            <Form.Group inline>
              <Form.Input label='Flight Controller' placeholder='Pixhawk' />
              <Form.Input label='Battery' placeholder='s6' />
              <Form.Input label='Height' placeholder='22' />
              <Form.Input label='Weight' placeholder='4' />
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
