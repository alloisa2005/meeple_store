import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: '8@vs',
    paddingHorizontal: '8@s',
    paddingVertical: '8@vs',
    borderRadius: '5@s',
  },
  image: {
    width: '65@s',
    height: '65@vs',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
    color: COLORS.cardinal,
  },
  price: {
    color: COLORS.textGray,
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
  },
});
