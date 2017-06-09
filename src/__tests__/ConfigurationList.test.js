/* /src/__tests__/ConfigurationList.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import ConfigurationList from '../components/Views/ConfigurationList.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<ConfigurationList />)

describe('ConfigurationList Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});