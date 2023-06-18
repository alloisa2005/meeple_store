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
    width: '60@s',
    height: '60@vs',
    resizeMode: 'contain',
  },
});
