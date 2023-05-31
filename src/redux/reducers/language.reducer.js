import { languageTypes } from '../types/language.types';

const initialState = {
  spanish: false,
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case languageTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        spanish: !state.spanish,
      };
    default:
      return state;
  }
};

export default languageReducer;
