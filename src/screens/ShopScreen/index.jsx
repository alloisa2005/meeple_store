import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Text, TextInput, Image, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import CategoryItem from '../../components/CategoryItem';
import { getCategoriesAsync } from '../../redux/actions/categories.actions';
import { getProductsAsync } from '../../redux/actions/products.actions';

const ShopScreen = () => {
  const dispatch = useDispatch();
  const { spanish } = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textHola}>
          {spanish ? 'Hola' : 'Hello'} <Text style={styles.title}>{user.name}</Text>
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
    </SafeAreaView>
  );
};

export default ShopScreen;
