/* /src/components/Home.jsx  */

//Libraies
import React, { Component } from 'react';

//Components
import NavBar from  '../NavBar.jsx'

import ReactTable from 'react-table'

class Home extends Component {
  render() {
    const data = [{
    Team: 'SSCI',
    task: '1-1'
  }]
   const columns = [{
    Header: 'Team',
    accessor: 'Team' // String-based value accessors! 
  }, {
    Header: 'Task',
    accessor: 'task',
  }]
    return (
  <div className="Home-container">

    <NavBar />
    <div className="View">
           <ReactTable
            className='-striped -highlight'
            data={data}
            columns={columns}
            defaultPageSize={10}
          />
        </div>
  </div>
    );
  }
}

export default Home;