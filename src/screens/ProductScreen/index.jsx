import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const ProductScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ShopNavigation', { screen: 'Shop' })}>
        <Text>ProductScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductScreen;
