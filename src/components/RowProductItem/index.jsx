import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import RatingComponent from '../RatingStars';

const RowProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.descContainer}>
        <RatingComponent rating={item.ratings} />
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </View>
  );
};

export default RowProductItem;
