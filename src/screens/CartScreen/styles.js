import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@s',
    backgroundColor: COLORS.background,
  },
});
