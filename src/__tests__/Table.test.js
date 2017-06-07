/* /src/__tests__/myTable.test.js  */

import React from 'react';
import {shallow} from 'enzyme';
import Table from '../components/Table.jsx';


test('Table component Renders', () => {
  // Render
  const component = shallow(
    <Table /> );
  expect(component);
});

