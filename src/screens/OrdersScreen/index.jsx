import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../components';

const OrdersScreen = () => {
  const { orders } = useSelector((state) => state.orders);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </View>
    </View>
  );
};

export default OrdersScreen;
