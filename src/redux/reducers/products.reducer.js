import { PRODUCTS } from '../../data/products';
import { productsTypes } from '../types/products.types';

const initialState = {
  products: PRODUCTS,
  loading: false,
  selected: null,
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
        loading: false,
        products: action.payload,
      };
    case productsTypes.SELECT_PRODUCT:
      return {
        ...state,
        selected: action.payload,
      };
    case productsTypes.SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
