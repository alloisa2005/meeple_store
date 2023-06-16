import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ProductItem, CategoryItem } from '../../components';
import { setCartAsync } from '../../redux/actions/cart.actions';
import { getOrdersAsync } from '../../redux/actions/orders.actions';

const ShopScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { spanish } = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setCartAsync(user.id));
    dispatch(getOrdersAsync(user.id));
  }, []);

  const onHandlerGoToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textHola}>
          {spanish ? 'Hola' : 'Hello'} <Text style={styles.title}>{user.name}</Text>
        </Text>
        <TouchableOpacity style={styles.logoContainer} onPress={onHandlerGoToSettings}>
          {user.imageUrl ? (
            <Image source={{ uri: user.imageUrl }} style={styles.logo} />
          ) : (
            <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.logo} />
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.subTitle}>
        {spanish ? 'La tienda de juegos de mesa en tus manos' : 'Board game store in your hands'}
      </Text>

      <Text style={styles.titleCat}>{spanish ? 'Categorías' : 'Categories'}</Text>

      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>

      <Text style={styles.titleCat}>{spanish ? 'Productos' : 'Products'}</Text>

      {/* Lista de Productos */}
      <View style={styles.listProdContainer}>
        <FlatList
          horizontal={false}
          numColumns={2}
          columnWrapperStyle={{}}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem navigation={navigation} product={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;
