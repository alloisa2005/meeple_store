import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import Navigation from './navigation';

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
    <Navigation>
      <StatusBar hidden style="light" />
    </Navigation>
  );
}
