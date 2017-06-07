/* /src/__tests__/NavBar.test.js  */


import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../components/NavBar.jsx';


it('NavBar component Renders', () => {
  // Render
  const component = shallow(
    <NavBar /> );
  expect(component);
});

