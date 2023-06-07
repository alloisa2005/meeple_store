import { cartTypes } from '../types/cart.types';

const initialState = {
  cart: [],
  loading: false,
  cartQuantity: 0,
  cartTotal: 0,
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
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        product.quantity = 1;
        state.cart.push(product);
      }
      console.log(state.cart);
      return {
        ...state,
        cart: [...state.cart],
        cartQuantity: state.cartQuantity + 1,
        cartTotal: state.cartTotal + product.price,
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        cartQuantity: state.cartQuantity - 1,
        cartTotal: state.cartTotal - action.payload.price,
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
