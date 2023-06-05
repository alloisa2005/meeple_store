import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  slider: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
  },
});
