import { FIREBASE_DB } from '../../constants/firebase.js';
import { categoriesTypes } from '../types/categories.types.js';

export const getCategoriesAsync = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: categoriesTypes.LOADING });

      const response = await fetch(FIREBASE_DB + 'categories.json');
      const data = await response.json();
      const dataArray = Object.keys(data).map((key) => data[key]);

      dispatch(getCategories(dataArray));
    } catch (error) {
      dispatch(getCategories([]));
    }
  };
};

export const getCategories = (dataArray) => {
  return {
    type: categoriesTypes.GET_CATEGORIES,
    payload: dataArray,
  };
};
