import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromCartAsync,
} from '../../redux/actions/cart.actions';
import { selectProduct } from '../../redux/actions/products.actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { user } = useSelector((state) => state.auth);

  const onHandlerNavigate = () => {
    dispatch(selectProduct(item));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  const onHandlerIncrementQuantity = () => {
    dispatch(addItemToCart(item));
  };

  const onHandlerDecrementQuantity = () => {
    dispatch(addItemToCart(item));
  };

  const onHandlerRemoveFromCart = () => {
    dispatch(removeItemFromCartAsync(item, user.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={onHandlerNavigate}>
          <Image source={{ uri: item.imgUrl }} style={styles.itemImage} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>$ {item.price * item.quantity}</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity style={styles.btnContainer} onPress={onHandlerDecrementQuantity}>
              <AntDesign name="minus" size={20} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={styles.itemQuantity}>{item.quantity}</Text>

            <TouchableOpacity style={styles.btnContainer} onPress={onHandlerIncrementQuantity}>
              <AntDesign name="plus" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
      <TouchableOpacity style={styles.deleteContainer} onPress={onHandlerRemoveFromCart}>
        <MaterialCommunityIcons name="delete" size={30} color={COLORS.cardinal} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
