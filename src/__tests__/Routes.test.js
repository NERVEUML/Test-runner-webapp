/* /src/__tests__/NavBar.test.js  */


import React from 'react';
import {shallow} from 'enzyme';
import Routes from '../components/Routes.jsx';


it('Routes component Renders', () => {
  // Render
  const component = shallow(
    <Routes /> );
  expect(component);
});
