import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { addItemToCartAsync } from '../../redux/actions/cart.actions';

const ProductScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { spanish } = useSelector((state) => state.language);
  const { selected: product } = useSelector((state) => state.products);

  const onHandlerGoBack = () => {
    navigation.goBack();
    // navigation.navigate('ShopNavigation', { screen: 'Shop' })
  };

  const onHandlerAddToCart = () => {
    dispatch(addItemToCartAsync(product, user.id));
  };

  return (
    <View style={styles.containerScreen}>
      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image source={{ uri: product.imgBack }} style={styles.image} />
        <Text style={styles.productTitle}>{product.name}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Icons */}
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

        {/* Link to BGG */}
        <TouchableOpacity style={styles.linkContainer}>
          <Image source={require('../../../assets/imgs/BGG.jpeg')} style={styles.bggImage} />
          <Text style={styles.linkTitle}>Go to Board Game Geek</Text>
        </TouchableOpacity>

        {/* Price and Add To Cart */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$ {product.price}</Text>
          <TouchableOpacity style={styles.addToCartBtn} onPress={onHandlerAddToCart}>
            <Entypo name="plus" size={24} color={COLORS.white} />
            <Text style={styles.btnText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>

        {/* Divisor */}
        <View style={styles.divisor} />
        {/* Descripción del juego */}
        <View style={styles.descContainer}>
          <Text style={styles.descTitle}>Descripción</Text>
          <Text style={styles.descContent}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

/* 
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


<TouchableOpacity style={styles.linkContainer}>
<Image source={require('../../../assets/imgs/BGG.jpeg')} style={styles.bggImage} />
<Text style={styles.linkTitle}>Go to Board Game Geek</Text>
</TouchableOpacity>


<View>
<Text>$ {product.price}</Text>
<TouchableOpacity style={styles.addToCartBtn}>
  <Entypo name="plus" size={24} color={COLORS.white} />
  <Text style={styles.btnText}>Add To Cart</Text>
</TouchableOpacity>
</View>

<Text style={styles.descTitle}>{spanish ? 'Descripción' : 'Description'}</Text>
<ScrollView showsVerticalScrollIndicator={false} style={styles.descContainer}>
<Text style={styles.descriptionContent}>{product.description}</Text>
</ScrollView> */
