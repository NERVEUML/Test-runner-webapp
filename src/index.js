/* /src/index.js  */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './components/App.jsx';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker();
