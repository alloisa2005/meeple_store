import { authTypes } from '../types/auth.types';

const initialState = {
  user: null,
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
    case authTypes.SIGNUP:
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
    case authTypes.SIGNIN:
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
