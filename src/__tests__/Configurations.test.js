/* /src/__tests__/NavBar.test.js  */


import React from 'react';
import {shallow} from 'enzyme';
import ConfigurationList from '../components/Views/ConfigurationList.jsx';
import ConfigurationForm from '../components/ConfigurationForm.jsx';


it('ConfigurationList component Renders', () => {
  // Render
  const component = shallow(
    <ConfigurationList /> );
  expect(component);
});

it('ConfigurationForm component Renders', () => {
  // Render
  const component = shallow(
    <ConfigurationForm /> );
  expect(component);
});
