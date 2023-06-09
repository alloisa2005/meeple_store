import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { selectProduct } from '../../redux/actions/products.actions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerNavigate = () => {
    dispatch(selectProduct(item.product));
    navigation.navigate('ShopNavigation', { screen: 'Product' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.imageContainer} onPress={onHandlerNavigate}>
          <Image source={{ uri: item.product.imgUrl }} style={styles.itemImage} />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={styles.itemTitle}>{item.product.name}</Text>
          <Text style={styles.itemPrice}>$ {item.product.price}</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TouchableOpacity style={styles.btnContainer}>
              <AntDesign name="minus" size={20} color={COLORS.white} />
            </TouchableOpacity>

            <Text style={styles.itemQuantity}>{item.quantity}</Text>

            <TouchableOpacity style={styles.btnContainer}>
              <AntDesign name="plus" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <MaterialCommunityIcons name="delete" size={30} color={COLORS.cardinal} />
      </View>
    </View>
  );
};

export default CartItem;
