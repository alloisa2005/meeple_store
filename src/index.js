import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { HomeScreen } from './screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'GochiHand-Regular': require('../assets/fonts/GochiHand-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 justify-center items-center">
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
