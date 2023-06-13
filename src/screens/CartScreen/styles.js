import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '10@s',
    backgroundColor: COLORS.background,
  },
  cartResumen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginBottom: '4@vs',
    borderRadius: '7@vs',
    padding: '12@vs',
  },
  totalAmount: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
  },
  products: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
    color: COLORS.textGray,
  },
  btnCheckout: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardinal,
    paddingHorizontal: '10@s',
    paddingVertical: '6@vs',
    borderRadius: '7@vs',
  },
  btnCheckoutText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  modalDataContainer: {
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: '5@vs',
    paddingHorizontal: '15@s',
    paddingVertical: '10@vs',
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: '24@vs',
    marginBottom: '4@vs',
    justifyContent: 'center',
    gap: '5@s',
    paddingVertical: '7@vs',
    borderRadius: '10@s',
    backgroundColor: COLORS.cardinal,
  },
  btnText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
    fontSize: '15@s',
  },
  modalTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
  titles: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
    color: COLORS.textGray,
  },
  descriptions: {
    marginBottom: '15@vs',
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
  },
  descriptionInput: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '14@s',
    marginBottom: '15@vs',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textGray,
  },
  titleDetails: {
    backgroundColor: COLORS.textGray,
    textAlign: 'center',
    color: COLORS.white,
    paddingVertical: '5@vs',
    borderRadius: '5@vs',
    marginTop: '18@vs',
    marginBottom: '8@vs',
    fontFamily: 'Montserrat-Bold',
    fontSize: '17@s',
  },
  detailTitle: {
    fontFamily: 'Montserrat-Bold',
    marginVertical: '3@vs',
    fontSize: '14@s',
  },
});
