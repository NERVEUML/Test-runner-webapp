/* /src/components/Eval_Parts/GpsField.jsx  */

//Libraries
import React, { Component } from 'react';
import { Button,Container,  } from 'semantic-ui-react';

//Components
import Coords from './Coords';

class GpsField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  //This will Hide the component of Coords and then re-call it on press 
  onButtonClick() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
    
  }
  render() {
    return (
      <Container className="gps-container" textAlign='center'>
        <h1>GPS </h1>
        <br />
        <br />
        <Button onClick={this.onButtonClick}>Get GPS Coordinates</Button>
        <div className='coords'>
        {this.state.showComponent ?
          <Coords /> :
          null
        }
        </div>
      </Container>
    );
  }
}

export default GpsField;