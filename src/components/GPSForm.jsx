/* /src/components/GPSForm.jsx  */

//Libraries
import React, { Component } from 'react';
import NavBar from  './NavBar';
import {Form, Segment, Header } from 'semantic-ui-react';

import GpsField from  './Eval_Parts/GpsField';
class GPSForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
      <div className="GPSForm-container">
          <Segment color='green'>
            <Header> {this.props.team} </Header>
            <GpsField />
            <Form>
              <Form.Button primary>Save</Form.Button>
            </Form>
          </Segment>
      </div>
    </div>
    );
  }
}

export default GPSForm;
