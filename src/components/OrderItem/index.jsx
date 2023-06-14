import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { COLORS } from '../../constants/colors';
import { selectOrder } from '../../redux/actions/orders.actions';
import { transformoFecha } from '../../utils/transformoFecha';

const OrderItem = ({ order }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlerGoToDetail = () => {
    dispatch(selectOrder(order));
    /* navigation.navigate('OrderDetail', { order }); */
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>{transformoFecha(order.date)}</Text>
        <Text>{order.quantity}</Text>
        <Text>{order.total}</Text>
      </View>

      <TouchableOpacity onPress={onHandlerGoToDetail}>
        <AntDesign name="infocirlceo" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;
