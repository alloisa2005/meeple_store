import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../components';

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.orders);
  const { spanish } = useSelector((state) => state.language);
  return (
    <View style={styles.container}>
      {orders.length === 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.msg}>
            {spanish ? 'No ha realizado compras' : 'No purchases made'}
          </Text>
        </View>
      ) : (
        <View>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => <OrderItem order={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default OrdersScreen;
