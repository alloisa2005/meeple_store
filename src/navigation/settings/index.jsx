import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsScreen, StaticsScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const SettingsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Statics" component={StaticsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
