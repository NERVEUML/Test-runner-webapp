/* /src/components/Table.jsx  */

//Libraries
import React, { Component } from 'react';
import Row from './Table_Parts/Row.jsx';

class Table extends Component {
  render() {
    return (
  <div className="Table-container">
  <h1>My Table</h1>
    <Row />
    <Row />
    <Row />
    <Row />
  </div>
    );
  }
}

export default Table;