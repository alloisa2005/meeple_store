import { authTypes } from '../types/auth.types';

export const signUpStart = () => {
  return {
    type: authTypes.SIGNUP_START,
  };
};

export const signUpSuccess = (user) => {
  return {
    type: authTypes.SIGNUP_SUCCESS,
    payload: user,
  };
};

export const signUpFailure = (error) => {
  return {
    type: authTypes.SIGNUP_FAILURE,
    payload: error,
  };
};

export const signInStart = () => {
  return {
    type: authTypes.SIGNIN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: authTypes.SIGNIN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: authTypes.SIGNIN_FAILURE,
    payload: error,
  };
};

export const signOut = () => {
  return {
    type: authTypes.SIGNOUT_SUCCESS,
  };
};
