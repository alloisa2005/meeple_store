import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignInScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
