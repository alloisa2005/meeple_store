import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import {
  getFirstArrayElements,
  sortArrayByPrice,
  sortArrayByRating,
} from '../../utils/arraysFunciones';
import RowProductItem from '../RowProductItem';

const RowProducts = ({ title, array, busqueda }) => {
  const navigation = useNavigation();
  const [filteredArray, setFilteredArray] = useState([]);

  const onHandlerGoToStore = () => {
    navigation.navigate('Store');
  };

  useEffect(() => {
    switch (busqueda) {
      case 1:
        setFilteredArray(getFirstArrayElements(sortArrayByRating(array), 5));
        break;
      case 2:
        setFilteredArray(getFirstArrayElements(sortArrayByPrice(array), 5));
        break;
      case 3:
        setFilteredArray(getFirstArrayElements(array, 5));
        break;
      default:
        break;
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onHandlerGoToStore}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredArray}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RowProductItem item={item} />}
      />
    </View>
  );
};

export default RowProducts;
