export const getFirstArrayElements = (array, cant) => {
  if (array.length > cant) {
    return array.slice(0, cant);
  } else {
    return array;
  }
};

export const sortArrayByRating = (array) => {
  return array.slice().sort((a, b) => b.ratings - a.ratings);
};

export const sortArrayByPrice = (array) => {
  return array.slice().sort((a, b) => b.price - a.price);
};
