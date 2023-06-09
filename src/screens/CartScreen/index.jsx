import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

const CartScreen = () => {
  const { cart, cartQuantity } = useSelector((state) => state.cart);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginVertical: 10 }}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
    </View>
  );
};

export default CartScreen;
