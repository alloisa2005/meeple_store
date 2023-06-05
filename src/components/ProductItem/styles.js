import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: '5@s',
  },
  image: {
    width: '100%',
    height: '160@vs',
    resizeMode: 'contain',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4@s',
  },
  productTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
    color: COLORS.cardinalLight,
    marginTop: '5@vs',
  },
});
