import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ShopScreen</Text>
    </SafeAreaView>
  );
};

export default ShopScreen;
