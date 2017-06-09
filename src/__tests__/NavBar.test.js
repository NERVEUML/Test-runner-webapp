/* /src/__tests__/NavBar.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import NavBar from '../components/NavBar.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<NavBar />)

describe('NavBar Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot();
  })
});