/* /src/__tests__/ResultForm.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import GpsField from '../components/Eval_Parts/GpsField.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<GpsField />)

describe('GpsField Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});