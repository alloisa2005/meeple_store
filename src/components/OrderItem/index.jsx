import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { COLORS } from '../../constants/colors';
import { selectOrder } from '../../redux/actions/orders.actions';
import { transformoFecha } from '../../utils/transformoFecha';

const OrderItem = ({ order }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { spanish } = useSelector((state) => state.language);

  const onHandlerGoToDetail = () => {
    dispatch(selectOrder(order));
    /* navigation.navigate('OrderDetail'); */
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleDetail}>
          {spanish ? 'Fecha: ' : 'Date: '}{' '}
          <Text style={styles.titleContent}>{transformoFecha(order.date)}</Text>
        </Text>
        <Text style={styles.titleDetail}>
          {spanish ? 'Cantidad de Productos: ' : 'Products quantity: '}{' '}
          <Text style={styles.titleContent}>{order.quantity}</Text>
        </Text>
        <Text style={styles.titleDetail}>
          {spanish ? 'Monto Total ($): ' : 'Total Amount ($): '}
          <Text style={styles.titleContent}>{order.total}</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.iconContainer} onPress={onHandlerGoToDetail}>
        <AntDesign name="infocirlceo" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>
    </View>
  );
};

export default OrderItem;
