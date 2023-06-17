import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const StoreScreen = () => {
  const { spanish } = useSelector((state) => state.language);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: spanish ? 'Tienda' : 'Store',
      headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold', fontSize: 21 },
      headerTintColor: COLORS.cardinal,
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.background },
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text>StoreScreen</Text>
    </ScrollView>
  );
};

export default StoreScreen;
