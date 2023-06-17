import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    height: '160@vs',
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
  title: {
    fontSize: '14@s',
    color: COLORS.cardinal,
    fontFamily: 'Montserrat-Bold',
  },
  list: {
    paddingLeft: '8@s',
  },
});
