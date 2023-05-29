import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textTitle: {
    color: COLORS.textBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
  textSubTitle: {
    color: COLORS.cardinal,
    fontFamily: 'GochiHand-Regular',
    fontSize: 50,
    marginBottom: 25,
  },
  containerGlass: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    padding: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: COLORS.cardinal,
    color: COLORS.textBlack,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  textButton: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: COLORS.white,
  },
});
