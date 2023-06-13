import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { COLORS } from '../../constants/colors';
import { CategoryScreen, ProductScreen, ShopScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  const { selected } = useSelector((state) => state.categories);
  return (
    <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
