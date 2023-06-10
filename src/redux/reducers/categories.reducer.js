import { CATEGORIES } from '../../data/categories';
import { categoriesTypes } from '../types/categories.types';

const initialState = {
  categories: CATEGORIES,
  loading: false,
  selected: null,
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
        loading: false,
      };
    case categoriesTypes.SELECT_CATEGORY:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
