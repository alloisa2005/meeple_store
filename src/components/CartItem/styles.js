import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: '7@vs',
    marginBottom: '10@vs',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100@s',
    height: '100@vs',
    paddingVertical: '5@vs',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {},
  itemTitle: {
    fontSize: '15@vs',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    marginBottom: '2@vs',
  },
  itemPrice: {
    fontFamily: 'Montserrat-Regular',
    fontSize: '14@vs',
    marginBottom: '12@vs',
  },
  btnContainer: {
    borderRadius: '7@vs',
    width: '24@s',
    height: '24@vs',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardinal,
  },
  itemQuantity: {
    fontSize: '20@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textBlack,
  },
  deleteContainer: {
    marginRight: 10,
  },
});
