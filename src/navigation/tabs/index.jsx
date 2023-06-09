import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { CartScreen, OrdersScreen, SettingsScreen, ShopScreen } from '../../screens';
import OrderNavigation from '../order';
import SettingsNavigation from '../settings';
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
        tabBarInactiveTintColor: COLORS.textGray,
        tabbarActiveTintColor: COLORS.cardinal,
      }}>
      <Tab.Screen
        name="ShopNavigation"
        component={ShopNavigation}
        options={{
          tabBarLabel: spanish ? 'Inicio' : 'Home',
          tabBarLabelStyle: styles.tabBarLabelStyleActive,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? COLORS.cardinal : COLORS.textGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: spanish ? 'Carrito' : 'Cart',
          tabBarLabelStyle: styles.tabBarLabelStyleActive,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'md-cart' : 'md-cart-outline'}
              size={size}
              color={focused ? COLORS.cardinal : COLORS.textGray}
            />
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
          tabBarLabelStyle: styles.tabBarLabelStyleActive,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={focused ? COLORS.cardinal : COLORS.textGray}
            />
          ),
          headerTitle: spanish ? 'Mis Compras' : 'My Orders',
          headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold', fontSize: 24 },
        }}
      />
      <Tab.Screen
        name="SettingsNavigation"
        component={SettingsNavigation}
        options={{
          headerShown: false,
          tabBarLabel: spanish ? 'Preferencias' : 'Settings',
          tabBarLabelStyle: styles.tabBarLabelStyleActive,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'md-list' : 'md-list-outline'}
              size={size}
              color={focused ? COLORS.cardinal : COLORS.textGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
