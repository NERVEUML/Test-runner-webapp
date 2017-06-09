/* /src/__tests__/Routes.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Routes from '../components/Routes.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Routes />)

describe('Routes Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true);
    //The Routes Must be identical for the site to work 
    expect(wrapper).toMatchSnapshot();
  })
});