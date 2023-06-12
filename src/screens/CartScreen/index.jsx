import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartItem } from '../../components';

const CartScreen = () => {
  const { cart, cartTotal, cartQuantity } = useSelector((state) => state.cart);
  const { spanish } = useSelector((state) => state.language);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginVertical: 10 }}
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      {/* Resumen Carrito */}
      {cartQuantity === 0 ? null : (
        <View style={styles.cartResumen}>
          <View>
            <Text style={styles.totalAmount}>
              {spanish ? 'Monto Total' : 'Total Amount'}: $ {cartTotal}
            </Text>
            <Text style={styles.products}>
              {spanish ? 'Productos' : 'Products'}: {cartQuantity}
            </Text>
          </View>
          <TouchableOpacity style={styles.btnCheckout}>
            <MaterialIcons name="attach-money" size={22} color="white" />
            <Text style={styles.btnCheckoutText}>{spanish ? 'Comprar' : 'Checkout'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
