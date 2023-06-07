import React from 'react';
import { ScrollView, View, Image } from 'react-native';

import { styles } from './styles';

const Slider = ({ images }) => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.slider}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      ))}
    </ScrollView>
  );
};

export default Slider;
