/* /src/components/ConfigurationList.jsx  */

//Libraries
import React, { Component } from 'react';
import NavBar from './NavBar';
class ConfigurationList extends Component {
  render() {
    return (
      <div className="ConfigurationList-container">
        <NavBar />
        <h1>My ConfigurationList</h1>
      </div>
    );
  }
}

export default ConfigurationList;