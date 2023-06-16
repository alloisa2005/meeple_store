import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10@s',
    marginTop: '5@vs',
    marginBottom: '10@vs',
  },
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@s',
    paddingVertical: '7@vs',
    borderRadius: '10@s',
    backgroundColor: COLORS.white,
    marginBottom: '10@vs',
    marginHorizontal: '8@s',
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
