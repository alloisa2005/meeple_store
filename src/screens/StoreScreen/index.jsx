import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { StoreItem } from '../../components';
import { COLORS } from '../../constants/colors';

const StoreScreen = () => {
  const { spanish } = useSelector((state) => state.language);
  const { products } = useSelector((state) => state.products);
  const navigation = useNavigation();

  const [filteredData, setFilteredData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: spanish ? 'Tienda' : 'Store',
      headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold', fontSize: 21 },
      headerTintColor: COLORS.cardinal,
      headerShadowVisible: false,
      headerStyle: { backgroundColor: COLORS.background },
    });

    setFilteredData(products);
  }, []);

  const onHandlerSearch = (text) => {
    if (text === '') {
      setSearchText(text);
      return setFilteredData(products);
    }

    const newData = products.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={spanish ? 'Buscar...' : 'Search...'}
          style={styles.input}
          autoCapitalize="none"
          value={searchText}
          onChangeText={onHandlerSearch}
        />
        <EvilIcons name="search" size={25} color={COLORS.textGray} />
      </View>

      <View style={{ flex: 1, marginTop: 10 }}>
        <FlatList
          numColumns={2}
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <StoreItem item={item} />}
          ItemSeparatorComponent={() => (
            <View style={{ width: 5, backgroundColor: COLORS.background }} />
          )}
          contentContainerStyle={{ backgroundColor: COLORS.background }}
        />
      </View>
    </View>
  );
};

export default StoreScreen;
