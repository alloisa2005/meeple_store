import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: '15@vs',
  },
  accountTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
  },
  accountSubTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '15@s',
    color: COLORS.cardinal,
  },
});
