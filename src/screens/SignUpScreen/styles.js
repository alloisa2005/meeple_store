import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10@s',
    paddingHorizontal: '10@s',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '18@s',
    color: COLORS.cardinal,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100@s',
    width: '100@s',
    resizeMode: 'contain',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: '15@vs',
  },
  accountTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
  },
  accountSubTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '15@s',
    color: COLORS.cardinal,
  },
});
