import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  flagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flagImage: {
    width: '30@s',
    height: '30@s',
    resizeMode: 'contain',
  },
});
