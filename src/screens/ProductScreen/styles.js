import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '30%',
  },
  headerContainer: {
    width: '100%',
    height: '30%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  productTitle: {
    position: 'absolute',
    bottom: '10@vs',
    left: '10@s',
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.white,
    backgroundColor: COLORS.textGray,
    paddingHorizontal: '13@s',
    paddingVertical: '5@vs',
    borderRadius: '7@s',
  },
  iconsContainer: {
    marginTop: '10@vs',
    marginHorizontal: '10@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5@s',
  },
  propertyTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
  },
  linkContainer: {
    marginTop: '12@vs',
    marginBottom: '16@vs',
    marginHorizontal: '10@s',
    alignItems: 'center',
  },
  bggImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: '4@vs',
  },
  linkTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
    color: COLORS.cardinal,
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: '4@vs',
    justifyContent: 'center',
    gap: '5@s',
    paddingVertical: '7@vs',
    borderRadius: '10@s',
    backgroundColor: COLORS.cardinal,
  },
  btnText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
    fontSize: '12@s',
  },
  groupTitle: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '15@s',
    marginBottom: '5@vs',
  },
  descTitle: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '15@s',
    marginHorizontal: '10@s',
  },
  descContainer: {
    flex: 1,
    marginTop: '5@vs',
    marginHorizontal: '10@s',
  },
  descriptionContent: {
    fontFamily: 'Montserrat-Regular',
    fontSize: '13@s',
    textAlign: 'justify',
    lineHeight: '20@vs',
  },
});
