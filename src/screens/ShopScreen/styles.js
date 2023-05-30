import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  titleContainer: {
    marginBottom: '15@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: '40@s',
    height: '40@vs',
    borderRadius: '20@s',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: '90%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@s',
    paddingVertical: '5@vs',
    borderRadius: '10@s',
    backgroundColor: COLORS.white,
  },
  searchInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: '13@s',
    flex: 1,
  },
  searchIcon: {
    fontSize: '20@s',
  },
});
