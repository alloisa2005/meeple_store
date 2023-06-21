import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { agruparRegistrosPorFecha } from '../../utils/arraysFunciones';
import { separadorDeMiles } from '../../utils/separadorMiles';

const StaticsScreen = () => {
  const navigation = useNavigation();

  const { spanish } = useSelector((state) => state.language);
  const { orders } = useSelector((state) => state.orders);
  const [agrupado, setAgrupado] = useState([]);

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
    const datos = agruparRegistrosPorFecha(orders);
    setAgrupado(datos);
  }, []);

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

      <View style={styles.graficaContainer}>
        <Text style={{ textAlign: 'center' }}>Grafico de Compras</Text>
        <View style={styles.grafica}>
          {agrupado.length > 0 && (
            <LineChart
              data={{
                labels: agrupado.map((item) => item.fecha),
                datasets: [{ data: agrupado.map((item) => item.total) }],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={400}
              yAxisLabel="$"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.background,
                backgroundGradientFrom: COLORS.background,
                backgroundGradientTo: COLORS.background,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => COLORS.cardinal,
                labelColor: (opacity = 1) => COLORS.cardinal,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '3',
                  stroke: COLORS.cardinal,
                },
              }}
              bezier
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default StaticsScreen;
