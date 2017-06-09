/* /src/components/Routes.jsx  */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Home from './Views/Home.jsx'; 
import ConfigurationList from './Views/ConfigurationList.jsx'; 
import EvaluationList from './Views/EvaluationList.jsx'; 

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
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