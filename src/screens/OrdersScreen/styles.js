import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  msg: {
    fontSize: '20@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
  },
});
