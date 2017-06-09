/* /src/__tests__/Row.test.js  */

//Libraries
import React from 'react';
import { shallow } from 'enzyme'
//Component To Be Tested
import Row from '../components/Table_Parts/Row.jsx';

//Call to create a Shallow rendering of component
const wrapper = shallow(<Row />)

describe('Row Component', () => {
  test('render', () => {
    expect(wrapper.exists()).toBe(true)
  })
});