/* /src/components/Routes.jsx  */

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Home from './Home.jsx';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;