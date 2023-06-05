import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const ProductItem = ({ product }) => {
  return (
    <View style={{ flex: 1 / 2, margin: 5 }}>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: product.imgUrl }} style={styles.image} />

        <View style={styles.title}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text>${product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
