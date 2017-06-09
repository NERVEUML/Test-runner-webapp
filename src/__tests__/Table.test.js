/* /src/__tests__/Table.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Table from '../components/Table.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Table />)

describe('Table Form Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});