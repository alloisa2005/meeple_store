import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeNavigation from '../home';
import TabNavigation from '../tabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
