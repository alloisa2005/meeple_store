import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@s',
    backgroundColor: COLORS.background,
  },
  cartResumen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginBottom: '4@vs',
    borderRadius: '7@vs',
    padding: '12@vs',
  },
  btnCheckout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardinal,
    paddingHorizontal: '10@s',
    paddingVertical: '6@vs',
    borderRadius: '7@vs',
  },
  btnCheckoutText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
  },
});
