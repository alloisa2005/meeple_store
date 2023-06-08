import {
  FIREBASE_SIGNUP_URL,
  FIREBASE_SIGNIN_URL,
  FIREBASE_DB,
  getFirebaseUser,
} from '../../constants/firebase.js';
import { uploadImageToCloudinary } from '../../utils/uploadImageCloudinary.js';
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

      const imageUrl = await uploadImageToCloudinary(user.pickedUrl);
      data = { ...data, name: user.name, address: user.address, imageUrl };

      if (data.error) {
        dispatch(signUpFailure(data.error.message));
      } else {
        const user = {
          name: data.name,
          address: data.address,
          email: data.email,
          imageUrl: data.imageUrl,
        };

        const response = await fetch(FIREBASE_DB + `users.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const idDoc = await response.json();
        dispatch(signUpSuccess({ ...user, id: idDoc.name }));
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
        const user = await getFirebaseUser(data.email);
        dispatch(signInSuccess(user));
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
