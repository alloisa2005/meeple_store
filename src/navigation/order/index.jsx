import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrderDetailScreen, OrdersScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const OrderNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Orders" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="OrdersDetail" component={OrderDetailScreen} />
    </Stack.Navigator>
  );
};

export default OrderNavigation;
