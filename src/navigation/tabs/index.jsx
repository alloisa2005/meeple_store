import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartScreen, ShopScreen, UserScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
