import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
};

export default CartScreen;
