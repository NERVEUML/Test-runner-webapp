/* /src/__tests__/Stopwatch.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Stopwatch from '../components/Eval_Parts/Stopwatch.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Stopwatch />)

describe('Stopwatch Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});