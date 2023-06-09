import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { CategoryItem, RowProducts } from '../../components';
import { COLORS } from '../../constants/colors';
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
    navigation.navigate('SettingsNavigation');
  };

  const onHanlderGoToStore = () => {
    navigation.navigate('Store');
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

      {/* Category List */}
      <View style={styles.listContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryItem item={item} />}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <RowProducts
          title={spanish ? 'Recién Añadidos' : 'Recently Added'}
          array={products}
          busqueda={3}
        />

        <RowProducts
          title={spanish ? 'Más Populares' : 'Top Ratings'}
          array={products}
          busqueda={1}
        />

        <RowProducts
          title={spanish ? 'Más Vendidos' : 'Best Sellers'}
          array={products}
          busqueda={2}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={onHanlderGoToStore} style={styles.btn}>
            <EvilIcons name="search" size={26} color={COLORS.white} />
            <Text style={styles.btnText}>{spanish ? 'Busca tu juego' : 'Find your game'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopScreen;
