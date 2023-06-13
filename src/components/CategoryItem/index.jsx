import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { selectCategory } from '../../redux/actions/categories.actions';

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerSelectCategory = () => {
    dispatch(selectCategory(item));
    navigation.navigate('Category');
  };

  return (
    <TouchableOpacity style={styles.categoryContainer} onPress={onHandlerSelectCategory}>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
