import { categoriesTypes } from '../types/categories.types';

const initialState = {
  categories: [],
  loading: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoriesTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case categoriesTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
