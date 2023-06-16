import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

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
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 5,
              backgroundColor: 'red',
              marginRight: 20,
              width: 200,
              borderRadius: 10,
            }}>
            <Image
              source={{ uri: item.imgUrl }}
              style={{ width: 120, height: 100, resizeMode: 'contain' }}
            />
            <Text>JAJAJA</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RowProducts;
