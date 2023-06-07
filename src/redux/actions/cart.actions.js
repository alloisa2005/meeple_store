import { FIREBASE_DB } from '../../constants/firebase.js';
import { cartTypes } from '../types/cart.types';

export const getCartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartTypes.LOADING });

      const response = await fetch(FIREBASE_DB + 'cart.json');
      const data = await response.json();
      const dataArray = Object.keys(data).map((key) => data[key]);

      dispatch(getCart(dataArray));
    } catch (error) {
      dispatch(getCart([]));
    }
  };
};

export const getCart = (dataArray) => {
  return {
    type: cartTypes.GET_CART,
    payload: dataArray,
  };
};

export const addItemToCartAsync = (product, userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartTypes.LOADING });

      const response = await fetch(FIREBASE_DB + `carts/${userId}.json`);
      const data = await response.json();

      if (data === null) {
        const response = await fetch(FIREBASE_DB + `carts/${userId}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: product.id,
            userId,
            quantity: 1,
          }),
        });
        const data = await response.json();
        dispatch(addItemToCart(data));
        return;
      }

      const dataArray = Object.keys(data).map((key) => data[key]);
      console.log('DA: ', dataArray);

      /* const cartItem = dataArray.find(
        (item) => item.productId === product.id && item.userId === userId
      );
      console.log('CI: ', cartItem); */
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItemToCart = (item) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item,
  };
};

/* export const addProduct = (product) => {
  return {
    type: cartTypes.ADD_PRODUCT,
    payload: product,
  };
}; */

/*
if (cartItem) {
        const response = await fetch(FIREBASE_DB + `carts/${userId}.json`);
        const data = await response.json();
        console.log('DATA: ', data);
         const response = await fetch(FIREBASE_DB + `carts/${userId}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            quantity: cartItem.quantity + 1,
          }),
        }); 
        const data = await response.json();
        dispatch(addItemToCart(data));
      } else {
      }
*/
