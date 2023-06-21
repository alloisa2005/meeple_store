import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { separadorDeMiles } from '../../utils/separadorMiles';

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
      <View style={styles.groupContainer}>
        <Text style={styles.title}>Compras Realizadas:</Text>
        <Text style={styles.titleDetail}>{separadorDeMiles(totalOrders, '.')}</Text>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.title}>Monto Gastado:</Text>
        <Text style={styles.titleDetail}>$ {separadorDeMiles(totalAmountOrders(), '.')}</Text>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.title}>Mayor Compra:</Text>
        <Text style={styles.titleDetail}>$ {separadorDeMiles(mayorCompra(), '.')}</Text>
      </View>
    </ScrollView>
  );
};

export default StaticsScreen;
