import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import AuthNavigation from '../auth';
import TabNavigation from '../tabs';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { user } = useSelector((state) => state.auth);
  console.log('user', user);

  return (
    <Stack.Navigator>
      {!user.id ? (
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
