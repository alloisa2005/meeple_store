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
      const { product } = action.payload;
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
    case cartTypes.DECREMENT_ITEM:
      const indice = state.cart.findIndex((item) => item.id === action.payload.id);

      if (indice !== -1) {
        state.cart[indice].quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
          cartQuantity: state.cartQuantity - 1,
          cartTotal: state.cartTotal - product.price,
        };
      } else {
        return { ...state };
      }

    case cartTypes.REMOVE_ITEM:
      const { id } = action.payload;
      const indexToRemove = state.cart.findIndex((item) => item.id === id);
      const itemToRemove = state.cart[indexToRemove];
      const newCart = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: newCart,
        cartQuantity: state.cartQuantity - itemToRemove.quantity,
        cartTotal: state.cartTotal - itemToRemove.price * itemToRemove.quantity,
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
