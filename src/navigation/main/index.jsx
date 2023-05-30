import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import AuthNavigation from '../auth';
import TabNavigation from '../tabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Stack.Navigator>
      {isLogin ? (
        <Stack.Screen
          name="AuthNavigation"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
