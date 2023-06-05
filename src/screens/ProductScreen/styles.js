import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '30%',
  },
  headerContainer: {
    width: '100%',
    height: '30%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productTitle: {
    position: 'absolute',
    bottom: '10@vs',
    left: '10@s',
    fontFamily: 'Montserrat-Bold',
    fontSize: '35@s',
    color: COLORS.white,
  },
});
