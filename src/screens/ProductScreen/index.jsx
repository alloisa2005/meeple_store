import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const ProductScreen = ({ navigation }) => {
  const { spanish } = useSelector((state) => state.language);
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

      {/* Iconos con caracteristicas del juego */}
      <View style={styles.iconsContainer}>
        <View style={styles.propertyContainer}>
          <FontAwesome5 name="users" size={28} color={COLORS.cardinalLight} />
          <Text style={styles.propertyTitle}>2 - 4</Text>
        </View>

        <View style={styles.propertyContainer}>
          <Ionicons name="time" size={28} color={COLORS.cardinalLight} />
          <Text style={styles.propertyTitle}>15 - 30'</Text>
        </View>

        <View style={styles.propertyContainer}>
          <FontAwesome5 name="baby-carriage" size={28} color={COLORS.cardinalLight} />
          <Text style={styles.propertyTitle}>8+ años</Text>
        </View>
      </View>

      {/* Links de interés */}
      <TouchableOpacity style={styles.linkContainer}>
        <Image source={require('../../../assets/imgs/BGG.jpeg')} style={styles.bggImage} />
        <Text style={styles.linkTitle}>Go to Board Game Geek</Text>
      </TouchableOpacity>

      {/* Añadir al carrito */}
      <View>
        <Text>$ {product.price}</Text>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Entypo name="plus" size={24} color={COLORS.white} />
          <Text style={styles.btnText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
      {/* Texto con descripción del juego */}
      <Text style={styles.descTitle}>{spanish ? 'Descripción' : 'Description'}</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.descContainer}>
        <Text style={styles.descriptionContent}>{product.description}</Text>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
