import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { COLORS } from '../../constants/colors';

const MyGraph = ({ array }) => {
  return (
    <LineChart
      data={{
        labels: array.map((item) => item.fecha),
        datasets: [{ data: array.map((item) => item.total) }],
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
  );
};

export default MyGraph;
