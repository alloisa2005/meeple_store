import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUser = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (e) {
    // remove error
  }
};
