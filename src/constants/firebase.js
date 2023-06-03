export const FIREBASE_DB = 'https://meeple-land-default-rtdb.firebaseio.com/';
export const FIREBASE_API_KEY = 'AIzaSyDz8V4Iov5cdh0LIHc08Li5-vkNET5uuvM';

export const FIREBASE_SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
export const FIREBASE_SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

export const getFirebaseUser = async (email) => {
  try {
    const res = await fetch(`${FIREBASE_DB}users.json?orderBy="email"&equalTo="${email}"`);
    const data = await res.json();

    const user = {};
    Object.keys(data).map((key) => {
      user.name = data[key].name;
      user.email = data[key].email;
      user.address = data[key].address;
      user.id = key;
    });

    //console.log('USER: ', user);
    return user;
  } catch (e) {
    return null;
  }
};
