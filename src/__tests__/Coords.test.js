/* /src/__tests__/Coords.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Coords from '../components/Eval_Parts/Coords.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Coords />)

describe('Coords Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});