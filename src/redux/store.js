import { configureStore } from '@reduxjs/toolkit';

import { languageReducer, cartReducer } from './slices';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    cart: cartReducer,
  },
});
