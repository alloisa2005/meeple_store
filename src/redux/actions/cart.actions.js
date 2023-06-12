import { addProductToCartFirebase, getCartFromFirebase } from '../../constants/firebase.js';
import { cartTypes } from '../types/cart.types';

export const setCartAsync = (userId) => {
  return async (dispatch) => {
    try {
      const cart = await getCartFromFirebase(userId);
      dispatch(setCart(cart));
    } catch (error) {
      console.log('ERROR: ', error);
    }
  };
};

export const setCart = (cart) => {
  return {
    type: cartTypes.SET_CART,
    payload: cart,
  };
};

export const addItemToCartAsync = (product, userId) => {
  return async (dispatch) => {
    const key = await addProductToCartFirebase(userId, product);
    dispatch(addItemToCart({ ...product, key }));
  };
};

export const addItemToCart = (product) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: product,
  };
};
