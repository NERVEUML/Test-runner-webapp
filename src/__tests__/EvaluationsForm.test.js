/* /src/__tests__/EvaluationForm.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import EvaluationForm from '../components/EvaluationForm.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<EvaluationForm />)

describe('EvaluationForm Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});