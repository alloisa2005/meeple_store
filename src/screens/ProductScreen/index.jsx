import { Entypo, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
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

  const [result, setResult] = useState(null);

  const handlePressButtonAsync = async () => {
    const result = await WebBrowser.openBrowserAsync(product.bggUrl);
    setResult(result);
  };
  const onHandlerGoBack = () => {
    navigation.navigate('ShopNavigation', { screen: 'Shop' });
  };

  const onHandlerAddToCart = () => {
    dispatch(addItemToCartAsync(product, user.id));
  };

  return (
    <View style={styles.containerScreen}>
      {/* Header Image */}
      <View style={styles.headerContainer}>
        {product.imgBack === '' ? (
          <Image source={require('../../../assets/imgs/noImg.jpg')} style={styles.image} />
        ) : (
          <Image source={{ uri: product.imgBack }} style={styles.image} />
        )}

        <Text style={styles.productTitle}>{product.name}</Text>
        <TouchableOpacity style={styles.arrow} onPress={onHandlerGoBack}>
          <AntDesign name="arrowleft" size={35} color={COLORS.white} />
        </TouchableOpacity>
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

        {/* Link to BGG  */}
        {product.bggUrl ? (
          <TouchableOpacity style={styles.linkContainer} onPress={handlePressButtonAsync}>
            <Image source={require('../../../assets/imgs/BGG.jpeg')} style={styles.bggImage} />
            <Text style={styles.linkTitle}>
              {spanish ? 'Board Game Geek Web' : 'Go to Board Game Geek'}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={{ marginTop: 20 }} />
        )}

        {/* Price and Add To Cart */}
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>$ {product.price}</Text>
          <TouchableOpacity style={styles.addToCartBtn} onPress={onHandlerAddToCart}>
            <Entypo name="plus" size={24} color={COLORS.white} />
            <Text style={styles.btnText}>{spanish ? 'Añadir al Carrito' : 'Add To Cart'}</Text>
          </TouchableOpacity>
        </View>

        {/* Divisor */}
        <View style={styles.divisor} />
        {/* Descripción del juego */}
        <View style={styles.descContainer}>
          <Text style={styles.descTitle}>{spanish ? 'Descripción' : 'Description'}</Text>
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
