import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { CartScreen, SettingsScreen, ShopScreen, UserScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { language } = useSelector((state) => state.language);
  const { totalItems } = useSelector((state) => state.cart);

  return (
    <Tab.Navigator initialRouteName="Shop">
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: language === 'es' ? 'Tienda' : 'Shop',
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
          tabBarLabel: language === 'es' ? 'Carrito' : 'Cart',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-cart' : 'md-cart-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarBadge: totalItems,
        }}
      />
      <Tab.Screen
        name="User"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: language === 'es' ? 'Preferencias' : 'Settings',
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
