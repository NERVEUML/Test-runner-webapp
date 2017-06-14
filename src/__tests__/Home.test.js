/* /src/__tests__/Home.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Home from '../components/Views/Home.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Home />)

describe('Home Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});