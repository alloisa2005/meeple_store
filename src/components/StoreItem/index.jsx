import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { selectProduct } from '../../redux/actions/products.actions';
import { recortarTexto } from '../../utils/recortarTexto';
import RatingComponent from '../RatingStars';

const StoreItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerClick = () => {
    dispatch(selectProduct(item));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  /* const recortarTexto = (texto) => {
    if (texto.length > 14) {
      return texto.substring(0, 14) + '...';
    }
    return texto;
  }; */

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlerClick}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{recortarTexto(item.name, 14)}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
        <RatingComponent rating={item.ratings} />
      </View>
    </TouchableOpacity>
  );
};

export default StoreItem;
