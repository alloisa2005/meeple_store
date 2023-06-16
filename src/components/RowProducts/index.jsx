import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import {
  getFirstArrayElements,
  sortArrayByPrice,
  sortArrayByRating,
} from '../../utils/arraysFunciones';

const RowProducts = ({ title, array, busqueda }) => {
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    switch (busqueda) {
      case 1:
        setFilteredArray(getFirstArrayElements(sortArrayByRating(array), 5));
        break;
      case 2:
        setFilteredArray(getFirstArrayElements(array, 5));
        break;
      case 3:
        setFilteredArray(getFirstArrayElements(sortArrayByPrice(array), 5));
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
        <Text>See All</Text>
      </View>

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
