import { FIREBASE_SIGNUP_URL, FIREBASE_SIGNIN_URL, FIREBASE_DB } from '../../constants/firebase.js';
import { authTypes } from '../types/auth.types';

export const loadingAuth = () => {
  return {
    type: authTypes.LOADING,
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    dispatch(loadingAuth());
    try {
      const response = await fetch(FIREBASE_SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
          returnSecureToken: true,
        }),
      });
      let data = await response.json();

      data = { ...data, name: user.name, address: user.address };

      if (data.error) {
        dispatch(signUpFailure(data.error.message));
      } else {
        const user = {
          name: data.name,
          address: data.address,
          email: data.email,
        };

        const response = await fetch(FIREBASE_DB + 'users.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        await response.json();

        /* let res = await fetch(FIREBASE_DB + 'users.json');
        res = await res.json();

        const users = Object.keys(res).map((key) => {
          return {
            ...res[key],
            id: key,
          };
        }); 
        console.log(users);  
        */

        dispatch(signUpSuccess(data));
      }
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };
};

export const signIn = (user) => {
  return async (dispatch) => {
    dispatch(loadingAuth());
    try {
      const response = await fetch(FIREBASE_SIGNIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (data.error) {
        dispatch(signInFailure(data.error.message));
      } else {
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
};

export const signUpSuccess = (user) => {
  return {
    type: authTypes.SIGNUP,
    payload: user,
  };
};

export const signUpFailure = (error) => {
  return {
    type: authTypes.SIGNUP_FAILURE,
    payload: error,
  };
};

export const signInSuccess = (user) => {
  return {
    type: authTypes.SIGNIN,
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
    type: authTypes.SIGNOUT,
  };
};
