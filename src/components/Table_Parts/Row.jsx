/* /src/components/Table_Parts/Row.jsx  */

//Libraries
import React, { Component } from 'react';

import Cell from './Cell.jsx';

class Row extends Component {
  render() {
    return (
  <div className="Row-container">
  <h1>My Row</h1>
  <Cell />
  </div>
    );
  }
}

export default Row;