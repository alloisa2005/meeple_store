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
      user.imageUrl = data[key].imageUrl;
      user.id = key;
    });

    return user;
  } catch (e) {
    return null;
  }
};

export const addProductToCartFirebase = async (userId, product) => {
  try {
    const res = await fetch(`${FIREBASE_DB}carts/${userId}.json`);
    const data = await res.json();

    if (data === null) {
      /* Si no hay nada en el carrito lo doy de alta al producto con cantidad = 1 */
      await fetch(`${FIREBASE_DB}carts/${userId}.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...product, quantity: 1 }),
      });
    } else {
      const keys = Object.keys(data);

      const productsKey = keys.find((key) => data[key].id === product.id);
      if (!productsKey) {
        /* Si no existe el producto en el carrito lo doy de alta con cantidad = 1 */
        await fetch(`${FIREBASE_DB}carts/${userId}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...product, quantity: 1 }),
        });
      } else {
        /* Si existe el producto en el carrito lo actualizo con cantidad + 1 */
        await fetch(`${FIREBASE_DB}carts/${userId}/${productsKey}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data[productsKey], quantity: data[productsKey].quantity + 1 }),
        });
      }
    }

    return data;
  } catch (e) {
    return null;
  }
};

export const postToFirebase = async (collection, element) => {
  try {
    const res = await fetch(`${FIREBASE_DB}${collection}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(element),
    });

    return res;
  } catch (e) {
    return null;
  }
};

export const getCartFromFirebase = async (userId) => {
  try {
    const res = await fetch(`${FIREBASE_DB}carts/${userId}.json`);
    const data = await res.json();
    const productKeys = Object.keys(data);

    const array = [];
    productKeys.map((key) => {
      array.push({ ...data[key] });
    });
    return array;
  } catch (e) {
    return null;
  }
};
