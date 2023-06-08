import { FIREBASE_DB } from '../../constants/firebase.js';
import { cartTypes } from '../types/cart.types';

export const getCartAsync = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartTypes.LOADING });

      const response = await fetch(FIREBASE_DB + `carts/${userId}.json`);
      const data = await response.json();
      if (data === null) {
        dispatch(getCart([]));
        return;
      }

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

      // Si el usuario no tiene un carrito creado, se crea uno nuevo
      if (data === null) {
        const response = await fetch(FIREBASE_DB + `carts/${userId}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product,
            userId,
            quantity: 1,
          }),
        });
        await response.json();
        dispatch(addItemToCart(product));
        return;
      } else {
        const keys = Object.keys(data);

        let existe = false;
        let keyExiste = null;
        keys.forEach(async (key) => {
          const cartItem = data[key];

          if (cartItem.product.id === product.id) {
            existe = true;
            keyExiste = key;
          }
        });

        // Si el producto ya existe en el carrito, se actualiza la cantidad
        if (existe) {
          await fetch(FIREBASE_DB + `carts/${userId}/${keyExiste}.json`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              quantity: data[keyExiste].quantity + 1,
            }),
          });

          dispatch(addItemToCart(product));
        } else {
          // Si el producto no existe en el carrito, se crea uno nuevo
          await fetch(FIREBASE_DB + `carts/${userId}.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              product,
              userId,
              quantity: 1,
            }),
          });
          dispatch(addItemToCart(product));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItemToCart = (product) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: product,
  };
};
