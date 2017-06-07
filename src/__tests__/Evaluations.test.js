/* /src/__tests__/NavBar.test.js  */
import React from 'react';
import {shallow} from 'enzyme';
import EvaluationList from '../components/Views/EvaluationList.jsx';
import EvaluationForm from '../components/EvaluationForm.jsx';


it('EvaluationList component Renders', () => {
  // Render
  const component = shallow(
    <EvaluationList /> );
  expect(component);
});

it('EvaluationForm component Renders', () => {
  // Render
  const component = shallow(
    <EvaluationForm /> );
  expect(component);
});
