import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import languageReducer from './reducers/language.reducer';

const rootReducer = combineReducers({
  language: languageReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
