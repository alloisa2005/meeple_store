import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { ProductCategoryItem } from '../../components';
import ProductItem from '../../components/ProductItem';
import { COLORS } from '../../constants/colors';

const CategoryScreen = () => {
  const { selected } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  const navigation = useNavigation();
  const [lista, setLista] = useState([]);

  const onHandlerGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLista(products.filter((item) => item.categoryId === selected.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onHandlerGoBack}>
          <AntDesign name="arrowleft" size={28} color={COLORS.cardinal} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{selected.name}</Text>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCategoryItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
