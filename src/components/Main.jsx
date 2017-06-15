/* /src/components/Main.jsx  */

//Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import NavBar from  './NavBar.jsx'
import Evaluation from './Evaluation.jsx';

//import ReactTable from 'react-table'

class Main extends Component {
  render() {

    return (
    <div className="Main-container">
     <Link to="/">Test Runner</Link>

      <NavBar />
      <div className="View">
      <Evaluation />
      </div>
     
    </div>
    );
  }
}

export default Main;