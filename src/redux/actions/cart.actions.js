import { addProductToCartFirebase, FIREBASE_DB } from '../../constants/firebase.js';
import { cartTypes } from '../types/cart.types';

export const setCartAsync = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartTypes.LOADING });

      const response = await fetch(FIREBASE_DB + `carts/${userId}.json`);
      const data = await response.json();
      if (data === null) {
        dispatch(setCart([]));
        return;
      }

      const dataArray = Object.keys(data).map((key) => data[key]);

      dispatch(setCart(dataArray));
    } catch (error) {
      dispatch(setCart([]));
    }
  };
};

export const setCart = (dataArray) => {
  return {
    type: cartTypes.SET_CART,
    payload: dataArray,
  };
};

export const addItemToCartAsync = (product, userId) => {
  return async (dispatch) => {
    await addProductToCartFirebase(userId, product);
    dispatch(addItemToCart(product));
  };
};

export const addItemToCart = (product) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: product,
  };
};
