import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AllProductsScreen,
  CategoryScreen,
  ProductScreen,
  ShopScreen,
  StoreScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="AllProducts" component={AllProductsScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
