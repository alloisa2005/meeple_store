import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Text, TextInput, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hola Juan</Text>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.logo} />
        </View>
      </View>

      <Text style={styles.subTitle}>La tienda de juegos de mesa en tus manos</Text>

      <View style={styles.searchContainer}>
        <TextInput autoCapitalize="none" placeholder="Buscar..." style={styles.searchInput} />
        <Feather name="search" size={24} color="black" style={styles.searchIcon} />
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;
