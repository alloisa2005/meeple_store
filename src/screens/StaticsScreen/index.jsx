import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const StaticsScreen = () => {
  const navigation = useNavigation();

  const { spanish } = useSelector((state) => state.language);
  const { orders } = useSelector((state) => state.orders);

  const totalOrders = orders.length;

  const totalAmountOrders = () => {
    let total = 0;
    let montoMayor = 0;
    orders.forEach((order) => {
      if (order.total > montoMayor) {
        montoMayor = order.total;
      }
      total += order.total;
    });
    return total;
  };

  const mayorCompra = () => {
    let montoMayor = 0;
    orders.forEach((order) => {
      if (order.total > montoMayor) {
        montoMayor = order.total;
      }
    });
    return montoMayor;
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: spanish ? 'Estadísticas' : 'Statistics',
      headerTitleStyle: {
        color: COLORS.cardinal,
        fontFamily: 'Montserrat-Bold',
      },
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.background },
      headerTintColor: COLORS.cardinal,
    });
  }, [spanish]);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
        <Text>Compras Realizadas:</Text>
        <Text>{totalOrders}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
        <Text>Monto Gastado:</Text>
        <Text>{totalAmountOrders()}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 8,
        }}>
        <Text>Mayor Compra:</Text>
        <Text>{mayorCompra()}</Text>
      </View>
    </ScrollView>
  );
};

export default StaticsScreen;
