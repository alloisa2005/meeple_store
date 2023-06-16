import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { getFirstArrayElements, sortArrayByRating } from '../../utils/arraysFunciones';

const RowProducts = ({ title, array, busqueda }) => {
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    switch (busqueda) {
      case 1:
        setFilteredArray(getFirstArrayElements(sortArrayByRating(array), 15));
        break;
      case 2:
        setFilteredArray(getFirstArrayElements(array, 15));
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default RowProducts;
