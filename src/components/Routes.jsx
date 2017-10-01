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
import ConfigurationForm from './ConfigurationForm.jsx';
import EvaluationForm from './EvaluationForm.jsx';
import GPSForm from './GPSForm.jsx';
class Routes extends Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route exact path="/" component={ App } />
            <Route exact path="/Configurations" component={ ConfigurationList } />
            <Route exact path="/Evaluations" component={ EvaluationList } />
            <Route exact path="/EvaluationForm" component={ EvaluationForm } />
            <Route exact path="/ConfigurationForm" component={ ConfigurationForm } />
            <Route exact path="/GPSForm" component={ GPSForm } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;