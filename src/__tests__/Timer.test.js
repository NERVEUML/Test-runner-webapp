/* /src/__tests__/Timer.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Timer from '../components/Eval_Parts/Timer.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Timer />)

describe('Timer Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});