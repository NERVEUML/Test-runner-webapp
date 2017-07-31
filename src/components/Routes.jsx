/* /src/components/Routes.jsx  */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

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
