import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { selectProduct } from '../../redux/actions/products.actions';
import { recortarTexto } from '../../utils/recortarTexto';
import { separadorDeMiles } from '../../utils/separadorMiles';
import RatingComponent from '../RatingStars';

const RowProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerGoToDetail = () => {
    dispatch(selectProduct(item));
    navigation.navigate('Product');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlerGoToDetail}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text style={styles.title}>{recortarTexto(item.name, 17)}</Text>
      </View>
      <View style={styles.descContainer}>
        <RatingComponent rating={item.ratings} />
        <Text style={styles.price}>$ {separadorDeMiles(item.price, '.')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RowProductItem;
