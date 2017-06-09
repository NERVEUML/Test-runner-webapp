/* /src/__tests__/EvaluationList.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import EvaluationList from '../components/Views/EvaluationList.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<EvaluationList />)

describe('EvaluationList Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});