import React, { Component } from 'react';
import Coords from './Coords';
class GpsField extends Component {
 constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

//This will Hide the component of Coords and then re-call it on press 
  _onButtonClick() {
        this.setState({
        showComponent: !this.state.showComponent,
        });
    
  }
    render() {
        return (
            <div className="gps-container">
                <button className="gps-button" onClick={this._onButtonClick}>Button</button>
                    {this.state.showComponent ?
                    <Coords /> :
                     null
                    }
            </div>
        );
    }
}

export default GpsField;