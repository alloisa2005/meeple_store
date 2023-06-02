import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { CartScreen, OrdersScreen, SettingsScreen, ShopScreen } from '../../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const spanish = useSelector((state) => state.language.spanish);

  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.background },
        title: '',
      }}>
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
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: spanish ? 'Compras' : 'Orders',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: spanish ? 'Preferencias de Usuario' : 'User Settings',
          headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold' },
          tabBarLabel: spanish ? 'Preferencias' : 'Settings',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'md-list' : 'md-list-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
