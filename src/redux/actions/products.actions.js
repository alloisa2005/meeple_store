import { FIREBASE_DB } from '../../constants/firebase';
import { productsTypes } from '../types/products.types';

export const getProductsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productsTypes.LOADING });

      const response = await fetch(FIREBASE_DB + 'products.json');
      const data = await response.json();
      const dataArray = Object.keys(data).map((key) => data[key]);

      dispatch(getProducts(dataArray));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProducts = (dataArray) => {
  return {
    type: productsTypes.GET_PRODUCTS,
    payload: dataArray,
  };
};