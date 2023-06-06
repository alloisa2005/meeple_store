import { cartTypes } from '../types/cart.types';

const initialState = {
  cart: [],
  loading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case cartTypes.GET_CART:
      return {
        ...state,
        cart: action.payload,
        loading: false,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
