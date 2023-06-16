import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const AllProductsScreen = () => {
  const navigation = useNavigation();
  const { spanish } = useSelector((state) => state.language);

  const onHandlerGoBack = () => {
    navigation.navigate('ShopNavigation', { screen: 'Shop' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onHandlerGoBack}>
          <AntDesign name="arrowleft" size={28} color={COLORS.cardinal} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Busca tu juego favorito</Text>
      </View>

      {/* Comento el search input pot ahora */}
      <View style={styles.searchContainer}>
        <TextInput
          autoCapitalize="none"
          placeholder={spanish ? 'Buscar...' : 'Search...'}
          style={styles.searchInput}
        />
        <Feather name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
    </SafeAreaView>
  );
};

export default AllProductsScreen;
