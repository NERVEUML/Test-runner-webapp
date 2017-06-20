/* /src/__tests__/ResultForm.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import ResultForm from '../components/Eval_Parts/ResultForm.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<ResultForm />)

describe('ResultForm Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});