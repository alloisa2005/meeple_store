import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const ProductScreen = ({ navigation }) => {
  const { selected: product } = useSelector((state) => state.products);

  const onHandlerGoBack = () => {
    navigation.goBack();
    // navigation.navigate('ShopNavigation', { screen: 'Shop' })
  };

  return (
    <View style={styles.containerScreen}>
      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: product.imgBack }} style={styles.image} />
        <Text style={styles.productTitle}>{product.name}</Text>
      </View>
    </View>
  );
};

export default ProductScreen;
