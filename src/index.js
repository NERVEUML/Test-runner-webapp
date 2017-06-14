/* /src/index.js  */

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
