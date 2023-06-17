import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { CartScreen, OrdersScreen, SettingsScreen, ShopScreen } from '../../screens';
import OrderNavigation from '../order';
import ShopNavigation from '../shop';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const spanish = useSelector((state) => state.language.spanish);
  const { cartQuantity } = useSelector((state) => state.cart);
  return (
    <Tab.Navigator
      initialRouteName="ShopNavigation"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.background },
        title: '',
      }}>
      <Tab.Screen
        name="ShopNavigation"
        component={ShopNavigation}
        options={{
          tabBarLabel: spanish ? 'Inicio' : 'Home',
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
          headerTitle: spanish ? 'Mi Carrito' : 'My Cart',
          headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold', fontSize: 24 },
          tabBarBadge: cartQuantity,
        }}
      />
      <Tab.Screen
        name="OrderNavigation"
        component={OrderNavigation}
        options={{
          tabBarLabel: spanish ? 'Compras' : 'Orders',
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
          headerTitle: spanish ? 'Mis Compras' : 'My Orders',
          headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold', fontSize: 24 },
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
