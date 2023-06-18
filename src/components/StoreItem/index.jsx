import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { selectProduct } from '../../redux/actions/products.actions';
import RatingComponent from '../RatingStars';

const StoreItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerClick = () => {
    dispatch(selectProduct(item));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onHandlerClick}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>$ {item.price}</Text>
          <RatingComponent rating={item.ratings} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoreItem;
