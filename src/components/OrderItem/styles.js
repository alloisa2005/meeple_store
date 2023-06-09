import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export default ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginBottom: '12@vs',
    borderRadius: '8@s',
    padding: '10@s',
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
  modalTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
  titleDetails: {
    textAlign: 'center',
    color: COLORS.cardinal,
    paddingVertical: '5@vs',
    borderRadius: '5@vs',
    fontFamily: 'Montserrat-Bold',
    fontSize: '18@s',
    marginBottom: '10@vs',
  },
  detailTitle: {
    fontFamily: 'Montserrat-Bold',
    marginVertical: '3@vs',
    fontSize: '14@s',
  },
  addToCartBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  detailContainer: {
    marginTop: '15@vs',
  },
  detailContainerTitle: {
    textAlign: 'center',
    backgroundColor: COLORS.textGray,
    paddingVertical: '5@vs',
    color: COLORS.white,
    borderRadius: '5@vs',
    fontFamily: 'Montserrat-Bold',
    fontSize: '16@s',
    marginBottom: '10@vs',
  },
  productContainer: {
    borderWidth: 1,
    borderColor: COLORS.textGray,
    borderRadius: '5@s',
    marginBottom: '12@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '7@s',
    paddingVertical: '4@vs',
  },
  productImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: '60@s',
    height: '60@vs',
    resizeMode: 'contain',
  },
  productTitle: {
    fontFamily: 'Montserrat-Bold',
    marginLeft: '3@s',
  },
  productSubTotal: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '13@s',
  },
});
