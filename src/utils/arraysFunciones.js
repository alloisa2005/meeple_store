export const getFirstArrayElements = (array, cant) => {
  if (array.length > cant) {
    return array.slice(0, cant);
  } else {
    return array;
  }
};

export const sortArrayByRating = (array) => {
  return array.slice().sort((a, b) => a.ratings - b.ratings);
};
