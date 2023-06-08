import React, { useEffect } from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { ProductItem, CategoryItem } from '../../components';
import { getCartAsync } from '../../redux/actions/cart.actions';
import { getCategoriesAsync } from '../../redux/actions/categories.actions';
import { getProductsAsync } from '../../redux/actions/products.actions';

const ShopScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { spanish } = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCategoriesAsync());
    dispatch(getCartAsync(user.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textHola}>
          {spanish ? 'Hola' : 'Hello'} <Text style={styles.title}>{user.name}</Text>
        </Text>
        <View style={styles.logoContainer}>
          {user.imageUrl ? (
            <Image source={{ uri: user.imageUrl }} style={styles.logo} />
          ) : (
            <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.logo} />
          )}
        </View>
      </View>

      <Text style={styles.subTitle}>La tienda de juegos de mesa en tus manos</Text>

      {/* Comento el search input pot ahora */}
      {/* <View style={styles.searchContainer}>
        <TextInput
          autoCapitalize="none"
          placeholder={spanish ? 'Buscar...' : 'Search...'}
          style={styles.searchInput}
        />
        <Feather name="search" size={24} color="black" style={styles.searchIcon} />
      </View> */}

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
