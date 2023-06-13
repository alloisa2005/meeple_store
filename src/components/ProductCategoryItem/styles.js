import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: '10@vs',
    paddingHorizontal: '10@s',
    paddingVertical: '5@vs',
    borderRadius: '5@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8@s',
  },
  image: {
    width: '80@s',
    height: '80@s',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: '15@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    marginBottom: '3@vs',
  },
  itemPrice: {
    fontFamily: 'Montserrat-Regular',
    color: COLORS.textGray,
    fontSize: '14@s',
  },
  addToCartBtn: {
    marginRight: '5@s',
  },
});
