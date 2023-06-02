import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { FlagComponent } from '../../components';
import { COLORS } from '../../constants/colors';
import { SignInScreen, SignUpScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const { spanish } = useSelector((state) => state.language);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.background },
        title: '',
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerRight: () => <FlagComponent />,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: spanish ? 'Crear Cuenta' : 'Create Account',
          headerTitleStyle: { color: COLORS.cardinal, fontFamily: 'Montserrat-Bold' },
          headerTintColor: COLORS.cardinal,
          headerRight: () => <FlagComponent />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
