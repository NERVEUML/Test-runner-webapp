/* /src/__tests__/App.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import App from '../components/App';

//Call to create a Shallow rendering of component
const wrapper = shallow(<App />)

describe('App', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});