import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { selectProduct } from '../../redux/actions/products.actions';
import RatingComponent from '../RatingStars';

const ProductItem = ({ navigation, product }) => {
  const dispatch = useDispatch();

  const onHandleNavigate = () => {
    dispatch(selectProduct(product));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  return (
    <View style={{ flex: 1 / 2, margin: 5 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imgContainer} onPress={onHandleNavigate}>
          <Image source={{ uri: product.imgUrl }} style={styles.image} />
          <Text style={styles.productTitle}>{product.name}</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <RatingComponent rating={product.ratings} />
          <Text style={styles.productPrice}>$ {product.price}</Text>
        </View>

        <TouchableOpacity style={styles.addToCartBtn}>
          <Entypo name="plus" size={24} color={COLORS.white} />
          <Text style={styles.btnText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
