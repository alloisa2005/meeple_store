import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginRight: 20,
    width: 200,
    borderRadius: 10,
  },
  imageContainer: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    left: 0,
    bottom: 5,
    color: 'white',
    backgroundColor: 'gray',
    opacity: 0.8,
    width: '100%',
    borderRadius: 5,
    padding: 5,
    fontFamily: 'Montserrat-Bold',
  },
  descContainer: {
    marginTop: '2@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '14@s',
  },
});
