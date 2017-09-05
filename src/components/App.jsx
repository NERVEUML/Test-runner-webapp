/* /src/components/App.jsx  */

import React from 'react';
import {Route} from 'react-router-dom'

// Components
import Home from './Home.jsx';
import ConfigurationList from './ConfigurationList.jsx';
import EvaluationList from './EvaluationList.jsx';
import ConfigurationForm from './ConfigurationForm.jsx';
import EvaluationForm from './EvaluationForm.jsx';
import GPSForm from './GPSForm.jsx';
const App = () => (
      <div>
          <main>
              <Route exact path="/" component={ Home } />
              <Route exact path="/Configurations" component={ ConfigurationList } />
              <Route exact path="/Evaluations" component={ EvaluationList } />
              <Route exact path="/EvaluationForm" component={ EvaluationForm } />
              <Route exact path="/ConfigurationForm" component={ ConfigurationForm } />
              <Route exact path="/GPSForm" component={ GPSForm } />
          </main>
      </div>
    );

export default App;
