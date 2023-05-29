import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { CartScreen, ShopScreen, UserScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { language } = useSelector((state) => state.language);

  return (
    <Tab.Navigator initialRouteName="Shop">
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: language === 'es' ? 'Tienda' : 'Shop',
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
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-cart' : 'md-cart-outline'} size={size} color={color} />
          ),
          headerShown: false,
          tabBarBadge: 0,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: language === 'es' ? 'Preferencias' : 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
