/* /src/__tests__/ConfigurationForm.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import ConfigurationForm from '../components/ConfigurationForm.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<ConfigurationForm />)

describe('ConfigurationForm Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});