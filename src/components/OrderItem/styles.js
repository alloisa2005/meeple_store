import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export default ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: '12@vs',
    borderRadius: '8@s',
    padding: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
