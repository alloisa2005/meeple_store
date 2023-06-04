import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { languageReducer, authReducer, productsReducer, categoriesReducer } from './reducers';

const rootReducer = combineReducers({
  language: languageReducer,
  auth: authReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
