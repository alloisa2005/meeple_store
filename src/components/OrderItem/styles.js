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
  titleDetail: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
    color: COLORS.textGray,
    marginBottom: '3@vs',
  },
  titleContent: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '15@s',
  },
  iconContainer: {
    marginRight: '3@s',
  },
});
