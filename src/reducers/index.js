
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import evaluations from './evaluations';


const rootReducer = combineReducers({evaluations, routing: routerReducer });

export default rootReducer;