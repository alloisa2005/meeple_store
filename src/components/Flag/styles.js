import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  flagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flagImage: {
    width: '27@s',
    height: '27@vs',
    resizeMode: 'contain',
  },
});
