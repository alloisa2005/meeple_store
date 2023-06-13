import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { selectProduct } from '../../redux/actions/products.actions';
import RatingComponent from '../RatingStars';

const ProductCategoryItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onHandlerGoToProductDetail = () => {
    dispatch(selectProduct(item));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  return (
    <View style={styles.container}>
      {/* TODO: Agregar Barra de Busqueda */}

      <TouchableOpacity style={styles.leftContainer} onPress={onHandlerGoToProductDetail}>
        {item.imgUrl === '' ? (
          <Image source={require('../../../assets/imgs/noImg.jpg')} style={styles.image} />
        ) : (
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
        )}

        <View>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>$ {item.price}</Text>
          <RatingComponent rating={item.ratings} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addToCartBtn}>
        <Feather name="shopping-cart" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCategoryItem;
