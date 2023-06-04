import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  categoryContainer: {
    backgroundColor: COLORS.cardinal,
    marginRight: '10@s',
    paddingHorizontal: '15@s',
    paddingVertical: '7@vs',
    borderRadius: '10@s',
  },
  categoryName: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
  },
});
