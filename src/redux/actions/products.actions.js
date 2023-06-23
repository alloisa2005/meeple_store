import { FIREBASE_DB } from '../../constants/firebase.js';
import { PRODUCTS } from '../../data/products';
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
      dispatch(getProducts([]));
    }
  };
};

export const getProducts = (dataArray) => {
  return {
    type: productsTypes.GET_PRODUCTS,
    payload: dataArray,
  };
};

export const selectProduct = (product) => {
  return {
    type: productsTypes.SELECT_PRODUCT,
    payload: product,
  };
};

export const setProductsAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productsTypes.LOADING });

      const response = await fetch(FIREBASE_DB + 'products.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(PRODUCTS),
      });
      const data = await response.json();

      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setProducts([]));
    }
  };
};

export const setProducts = (productsArray) => {
  return {
    type: productsTypes.SET_PRODUCTS,
    payload: productsArray,
  };
};
