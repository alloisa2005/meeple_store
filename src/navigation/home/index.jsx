import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
