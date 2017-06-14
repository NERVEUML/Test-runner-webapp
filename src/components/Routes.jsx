/* /src/components/Routes.jsx  */


// TODO NEED to create a main index route aka Home and alternate path for Main 

/*
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/view/:id" component={Eval}></Route>
      </Route>
    </Router>
  </Provider>
)
*/ 
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
// import react router deps
import { IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

class Routes extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router history={history}>
        <div>
          <Switch>
            <IndexRoute exact path="/" component={ Home } />
            <Route exact path="/Configurations" component={ ConfigurationList } />
            <Route exact path="/Evaluations" component={ EvaluationList } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default Routes;