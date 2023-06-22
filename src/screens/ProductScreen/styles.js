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
    height: '35%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  arrow: {
    position: 'absolute',
    top: '40@vs',
    left: '10@s',
    color: COLORS.white,
    backgroundColor: COLORS.white,
    borderRadius: '50@s',
    padding: '3@s',
  },
  productTitle: {
    position: 'absolute',
    bottom: '10@vs',
    left: '10@s',
    fontFamily: 'GochiHand-Regular',
    fontSize: '24@s',
    textTransform: 'uppercase',
    color: COLORS.cardinal,
    backgroundColor: COLORS.white,
    paddingHorizontal: '13@s',
    paddingVertical: '5@vs',
    borderRadius: '7@s',
  },
  iconsContainer: {
    marginTop: '12@vs',
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
  priceContainer: {
    marginHorizontal: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '4@vs',
    justifyContent: 'center',
    gap: '5@s',
    paddingVertical: '7@vs',
    paddingHorizontal: '15@s',
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
  divisor: {
    marginTop: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    height: 2,
    backgroundColor: COLORS.cardinal,
  },
  descContainer: {
    flex: 1,
    marginHorizontal: '10@s',
  },
  descTitle: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '17@s',
    marginBottom: '5@vs',
  },
  descContent: {
    textAlign: 'justify',
    fontFamily: 'Montserrat-Regular',
    fontSize: '14@s',
    lineHeight: '20@s',
    marginBottom: '10@vs',
  },
});
