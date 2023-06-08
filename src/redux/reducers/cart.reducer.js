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
        cartQuantity: action.payload.reduce((acc, item) => acc + item.quantity, 0),
        cartTotal: action.payload.reduce((acc, item) => acc + item.price * item.quantity, 0),
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
      return {
        ...state,
        cart: [...state.cart],
        cartQuantity: state.cartQuantity + 1,
        cartTotal: state.cartTotal + product.price,
      };

    default:
      return state;
  }
};

export default cartReducer;
