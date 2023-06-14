import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const OrderItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>{order.date}</Text>
      <Text>{order.quantity}</Text>
      <Text>{order.total}</Text>
    </View>
  );
};

export default OrderItem;
