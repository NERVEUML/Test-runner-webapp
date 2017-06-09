/* /src/components/Home.jsx  */

//Libraies
import React, { Component } from 'react';

//Components
import NavBar from  '../NavBar.jsx'
import Table from '../Table.jsx'


class Home extends Component {
  render() {
    return (
  <div className="Home-container">

    <NavBar />
    <Table />
    
  </div>
    );
  }
}

export default Home;