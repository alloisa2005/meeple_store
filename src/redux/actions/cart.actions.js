import { FIREBASE_DB } from '../../constants/firebase';
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
