import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

const CartScreen = () => {
  const { cart, cartTotal, cartQuantity } = useSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <Text>{cartTotal}</Text>
      <Text>{cartQuantity}</Text>

      <FlatList
        style={{ marginVertical: 10 }}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
    </View>
  );
};

export default CartScreen;
