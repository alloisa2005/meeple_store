import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    height: '150@vs',
    marginVertical: '10@vs',
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    paddingHorizontal: '8@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8@vs',
  },
});
