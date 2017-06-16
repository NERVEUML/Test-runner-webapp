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

  _onButtonClick() {
    this.setState({
      showComponent: true,
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