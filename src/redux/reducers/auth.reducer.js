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
        loading: true,
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
    case authTypes.UPDATE_USER:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          adress: action.payload.address,
        },
      };
    case authTypes.UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authTypes.SIGNOUT:
      return {
        ...state,
        user: null,
      };
    case authTypes.CLEAN_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
