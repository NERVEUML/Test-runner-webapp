/* /src/__tests__/Cell.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Cell from '../components/Table_Parts/Cell.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Cell />)

describe('Cell Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});