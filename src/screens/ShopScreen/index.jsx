import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ShopScreen = () => {
  const { user } = useSelector((state) => state.auth);

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
    </SafeAreaView>
  );
};

export default ShopScreen;
