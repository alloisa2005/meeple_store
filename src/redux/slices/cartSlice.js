import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, name } = action.payload;
      const product = state.cart.find((item) => item.id === id);

      state.totalItems++;
      state.total += price;

      if (!product) {
        state.cart.push({ id, price, name, quantity: 1 });
      } else {
        product.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((item) => item.id === id);
      state.totalItems--;
      state.total -= product.price;
      if (product.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
      } else {
        product.quantity--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
