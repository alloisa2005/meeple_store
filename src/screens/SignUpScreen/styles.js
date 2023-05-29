import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    marginTop: '10@vs',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10@s',
    paddingHorizontal: '10@s',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '17@s',
    color: COLORS.cardinal,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 130 / 2,
  },
  image: {
    height: '90@s',
    width: '90@s',
    resizeMode: 'contain',
  },
  cameraIcon: {
    position: 'absolute',
    right: '5@s',
    bottom: '-10@s',
    color: COLORS.cardinal,
    backgroundColor: COLORS.white,
    padding: '7@s',
    borderRadius: 50,
  },
  containerGlass: {
    marginTop: '20@vs',
    backgroundColor: 'white',
    borderRadius: '7@s',
    width: '90%',
    padding: '15@s',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: '15@vs',
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
