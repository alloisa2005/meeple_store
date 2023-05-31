import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartScreen, SettingsScreen, ShopScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const spanish = useSelector((state) => state.language.spanish);

  return (
    <Tab.Navigator initialRouteName="Shop">
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: spanish ? 'Tienda' : 'Shop',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: spanish ? 'Carrito' : 'Cart',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-cart' : 'md-cart-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="User"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: spanish ? 'Preferencias' : 'Settings',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
