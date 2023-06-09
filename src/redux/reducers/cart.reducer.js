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
        loading: !state.loading,
      };
    case cartTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
        cartQuantity:
          action.payload.length === 0
            ? 0
            : action.payload.reduce((acc, item) => acc + item.quantity, 0),
        cartTotal:
          action.payload.length === 0
            ? 0
            : action.payload.reduce((acc, item) => acc + item.price * item.quantity, 0),
        loading: false,
      };
    case cartTypes.ADD_ITEM:
      const product = action.payload;
      const existe = state.cart.find((item) => item.id === product.id);

      let updatedCart = [];
      if (existe) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        cart: updatedCart,
        cartQuantity: state.cartQuantity + 1,
        cartTotal: state.cartTotal + action.payload.price,
        loading: false,
      };
    case cartTypes.REMOVE_ITEM:
      const productToRemove = action.payload;
      const updatedCartRemove = state.cart.filter((item) => item.id !== productToRemove.id);

      return {
        ...state,
        cart: updatedCartRemove,
        cartQuantity: state.cartQuantity - productToRemove.quantity,
        cartTotal: state.cartTotal - productToRemove.price * productToRemove.quantity,
        loading: false,
      };
    case cartTypes.DECREMENT_ITEM:
      const productToDecrement = action.payload;
      const updatedCartDecrement = state.cart.map((item) =>
        item.id === productToDecrement.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      return {
        ...state,
        cart: updatedCartDecrement,
        cartQuantity: state.cartQuantity - 1,
        cartTotal: state.cartTotal - action.payload.price,
        loading: false,
      };
    case cartTypes.DELETE_CART:
      return {
        ...state,
        cart: [],
        cartQuantity: 0,
        cartTotal: 0,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
