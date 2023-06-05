import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: '5@s',
  },
  imgContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '160@vs',
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4@vs',
    paddingHorizontal: '5@s',
  },
  productTitle: {
    position: 'absolute',
    bottom: '5@vs',
    left: '5@s',
    fontFamily: 'Montserrat-Bold',
    fontSize: '15@s',
    color: COLORS.white,
    backgroundColor: COLORS.textGray,
    paddingHorizontal: '10@s',
    paddingVertical: '3@vs',
    borderRadius: '7@s',
  },
  productPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
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
});
