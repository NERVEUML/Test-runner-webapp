/* /src/__tests__/myTable.test.js  */

import React from 'react';
import {shallow} from 'enzyme';
import Table from '../components/Table.jsx';
import Row from  '../components/Table_Parts/Row.jsx'
import Cell from '../components/Table_Parts/Cell.jsx';

test('Table component Renders', () => {
  // Render
  const component = shallow(
    <Table /> );
  expect(component);
});

test('Row component Renders', () => {
  // Render
  const component = shallow(
    <Row /> );
  expect(component);
});

test('Cell component Renders', () => {
  // Render
  const component = shallow(
    <Cell /> );
  expect(component);
});