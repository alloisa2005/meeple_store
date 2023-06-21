import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { addItemToCartAsync } from '../../redux/actions/cart.actions';
import { selectProduct } from '../../redux/actions/products.actions';
import { recortarTexto } from '../../utils/recortarTexto';
import RatingComponent from '../RatingStars';

const ProductCategoryItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onHandlerGoToProductDetail = () => {
    dispatch(selectProduct(item));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  const onHandlerAddToCart = () => {
    dispatch(addItemToCartAsync(item, user.id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer} onPress={onHandlerGoToProductDetail}>
        {item.imgUrl === '' ? (
          <Image source={require('../../../assets/imgs/noImg.jpg')} style={styles.image} />
        ) : (
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
        )}

        <View>
          <Text style={styles.itemTitle}>{recortarTexto(item.name, 18)}</Text>
          <Text style={styles.itemPrice}>$ {item.price}</Text>
          <RatingComponent rating={item.ratings} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addToCartBtn} onPress={onHandlerAddToCart}>
        <Feather name="shopping-cart" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCategoryItem;
