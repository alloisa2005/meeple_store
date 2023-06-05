import { productsTypes } from '../types/products.types';

const initialState = {
  products: [],
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
        products: action.payload,
        loading: false,
      };
    case productsTypes.SELECT_PRODUCT:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
