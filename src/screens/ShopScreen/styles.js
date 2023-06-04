import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    marginBottom: '10@vs',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8@s',
  },
  textHola: {
    color: COLORS.textGray,
    fontSize: '23@s',
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '18@s',
    color: COLORS.cardinal,
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
  subTitle: {
    fontSize: '16@s',
    paddingHorizontal: '8@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textBlack,
    marginBottom: '14@vs',
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
  titleCat: {
    color: COLORS.cardinalLight,
    fontSize: '16@s',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: '8@s',
  },
  listContainer: {
    marginVertical: '7@vs',
    paddingLeft: '8@s',
  },
});
