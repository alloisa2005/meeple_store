import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/colors';
import { SignInScreen, SignUpScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
