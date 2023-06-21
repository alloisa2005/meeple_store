import { FIREBASE_DB } from './firebase.js';

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

      const res = await fetch(`${FIREBASE_DB}carts/${userId}.json`);
      const data = await res.json();
      const keys = Object.keys(data);
      const productsKey = keys.find((key) => data[key].id === product.id);
      await fetch(`${FIREBASE_DB}carts/${userId}/${productsKey}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data[productsKey], key: productsKey }),
      });
      return productsKey;
    } else {
      const keys = Object.keys(data);

      const productsKey = keys.find((key) => data[key].id === product.id);
      if (productsKey === undefined) {
        /* Si no existe el producto en el carrito lo doy de alta con cantidad = 1 */
        await fetch(`${FIREBASE_DB}carts/${userId}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...product, quantity: 1, key: productsKey }),
        });

        const res = await fetch(`${FIREBASE_DB}carts/${userId}.json`);
        const data = await res.json();
        const keys = Object.keys(data);
        const productsKey = keys.find((key) => data[key].id === product.id);
        await fetch(`${FIREBASE_DB}carts/${userId}/${productsKey}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data[productsKey], key: productsKey }),
        });
        return productsKey;
      } else {
        /* Si existe el producto en el carrito lo actualizo con cantidad + 1 */
        await fetch(`${FIREBASE_DB}carts/${userId}/${productsKey}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data[productsKey], quantity: data[productsKey].quantity + 1 }),
        });
        return productsKey;
      }
    }
  } catch (e) {
    return null;
  }
};

export const decrementProductFromCartFirebase = async (userId, product) => {
  try {
    const res = await fetch(`${FIREBASE_DB}carts/${userId}/${product.key}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...product, quantity: product.quantity - 1 }),
    });
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
    return [];
  }
};

export const removeItemFromCartFirebase = async (userId, product) => {
  try {
    await fetch(`${FIREBASE_DB}carts/${userId}/${product.key}.json`, {
      method: 'DELETE',
    });
  } catch (e) {
    console.log(e);
  }
};

export const getOrdersFromFirebase = async (userId) => {
  try {
    const res = await fetch(`${FIREBASE_DB}orders/${userId}.json`);
    const data = await res.json();
    const orderKeys = Object.keys(data);

    const array = [];
    orderKeys.map((key) => {
      array.push({ ...data[key] });
    });

    array.map((order) => {
      return { ...order, date: (order.date = new Date(order.date)) };
    });

    return array;
  } catch (e) {
    return [];
  }
};

export const addOrderToFirebase = async (userId, cart) => {
  try {
    await fetch(`${FIREBASE_DB}orders/${userId}.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    });
  } catch (e) {
    return null;
  }
};

export const deleteCartFromFirebase = async (userId) => {
  try {
    await fetch(`${FIREBASE_DB}carts/${userId}.json`, {
      method: 'DELETE',
    });
  } catch (e) {
    return null;
  }
};

export const updateUserFirebase = async (user) => {
  try {
    await fetch(FIREBASE_DB + `users/${user.id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    return null;
  }
};
