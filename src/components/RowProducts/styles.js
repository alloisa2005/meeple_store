import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    height: '150@vs',
    marginBottom: '10@vs',
    backgroundColor: COLORS.background,
    paddingLeft: '8@s',
  },
});
