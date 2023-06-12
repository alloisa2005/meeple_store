import {
  addProductToCartFirebase,
  decrementProductFromCartFirebase,
  getCartFromFirebase,
  removeItemFromCartFirebase,
} from '../../constants/firebase.js';
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

export const decrementItemFromCartAsync = (product, userId) => {
  return async (dispatch) => {
    await decrementProductFromCartFirebase(userId, product);
    dispatch(decrementItemFromCart(product));
  };
};

export const decrementItemFromCart = (product) => {
  return {
    type: cartTypes.DECREMENT_ITEM,
    payload: product,
  };
};

export const removeItemFromCartAsync = (product, userId) => {
  return async (dispatch) => {
    await removeItemFromCartFirebase(userId, product);
    dispatch(removeItemFromCart(product));
  };
};

export const removeItemFromCart = (product) => {
  return {
    type: cartTypes.REMOVE_ITEM,
    payload: product,
  };
};
