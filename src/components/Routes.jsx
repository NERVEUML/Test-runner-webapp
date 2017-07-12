/* /src/components/Routes.jsx  */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

require("eslint/package.json"); // eslint is a peer dependency. 

require("eslint-plugin-jsx-a11y/package.json"); // eslint-plugin-jsx-a11y is a peer dependency. 

require("eslint-plugin-import/package.json"); // eslint-plugin-import is a peer dependency. 

require("eslint-plugin-react/package.json"); // eslint-plugin-react is a peer dependency. 
var eslintConfigAirbnb = require("eslint-config-airbnb")

// Components
import App from './App'; 
import ConfigurationList from './ConfigurationList.jsx'; 
import EvaluationList from './EvaluationList.jsx'; 

class Routes extends Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route exact path="/" component={ App } />
            <Route exact path="/Configurations" component={ ConfigurationList } />
            <Route exact path="/Evaluations" component={ EvaluationList } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;