import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductScreen, ShopScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Shop" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
