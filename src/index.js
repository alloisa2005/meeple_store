import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { init } from './db';
import Navigation from './navigation';
import store from './redux/store';

init()
  .then(() => {
    console.log('Database initialized');
  })
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err);
  });

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
    <Provider store={store}>
      <Navigation>
        <StatusBar hidden style="light" />
      </Navigation>
    </Provider>
  );
}
