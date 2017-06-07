/* /src/__tests__/Home.test.js  */

import React from 'react';
import {shallow} from 'enzyme';
import Home from '../components/Home.jsx';
import NavBar from '../components/NavBar.jsx';
import Table from '../components/Table.jsx';

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

//Tests props
const ran_title = randomString(15);
it('ran_title',() =>{
  console.log(ran_title);
});


it('Home Component', () => {
  // Render
  const component = shallow(
  <Home> 
      <NavBar title="ran_title" /> {/*Basic NavBar with options button */} 
        <myTable />   
  </Home> );
  expect(component);
});

