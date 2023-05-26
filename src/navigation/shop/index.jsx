import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ShopScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
