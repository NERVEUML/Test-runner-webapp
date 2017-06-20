/* /src/index.js  */

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
