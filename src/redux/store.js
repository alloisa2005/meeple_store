import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { languageReducer, authReducer } from './reducers';

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
