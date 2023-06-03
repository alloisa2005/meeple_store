import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Text, TextInput, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { getProductsAsync } from '../../redux/actions/products.actions';

const ShopScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textHola}>
          Hola <Text style={styles.title}>{user.name}</Text>
        </Text>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.logo} />
        </View>
      </View>

      <Text style={styles.subTitle}>La tienda de juegos de mesa en tus manos</Text>

      <View style={styles.searchContainer}>
        <TextInput autoCapitalize="none" placeholder="Buscar..." style={styles.searchInput} />
        <Feather name="search" size={24} color="black" style={styles.searchIcon} />
      </View>

      <Text style={styles.titleCat}>Categories</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default ShopScreen;
