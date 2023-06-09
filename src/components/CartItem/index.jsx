import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const CartItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.product.imgUrl }} style={styles.itemImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.itemTitle}>{item.product.name}</Text>
          <Text style={styles.itemTitle}>{item.product.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
