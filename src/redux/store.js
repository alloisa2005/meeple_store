import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { languageReducer, authReducer, productsReducer } from './reducers';

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  products: productsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
