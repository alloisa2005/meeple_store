import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center', // backgroundColor: 'red
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  flagImage: {
    width: '30@s',
    height: '30@s',
    resizeMode: 'contain',
  },
  image: {
    width: '200@s',
    height: '200@s',
    resizeMode: 'contain',
    marginBottom: '20@vs',
  },
  textTitle: {
    color: COLORS.textBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: '18@s',
  },
  textSubTitle: {
    color: COLORS.cardinal,
    fontFamily: 'GochiHand-Regular',
    fontSize: '47@s',
    marginBottom: '25@vs',
  },
  containerGlass: {
    backgroundColor: 'white',
    borderRadius: '7@s',
    width: '90%',
    padding: '15@s',
  },
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15@vs',
    gap: 10,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
    paddingVertical: '6@vs',
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
    paddingVertical: '6@vs',
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: '14@s',
  },
  button: {
    backgroundColor: COLORS.cardinal,
    color: COLORS.textBlack,
    paddingVertical: '10@vs',
    paddingHorizontal: '15@s',
    borderRadius: 10,
  },
  textButton: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '15@s',
    color: COLORS.white,
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
