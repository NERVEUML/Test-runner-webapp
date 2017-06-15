/* /src/__tests__/Home.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Main from '../components/Main.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Main />)

describe('Main Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});