import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const CategoryItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.categoryContainer}>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
