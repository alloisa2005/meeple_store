import { authTypes } from '../types/auth.types';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case authTypes.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case authTypes.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
