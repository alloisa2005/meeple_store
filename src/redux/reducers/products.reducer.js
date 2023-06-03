import { productsTypes } from '../types/products.types';

const initialState = {
  products: [],
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case productsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
