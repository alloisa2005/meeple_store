import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: '4@s',
    paddingHorizontal: '10@s',
    paddingVertical: '5@vs',
  },
  input: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: '13@s',
    color: COLORS.black,
  },
});
