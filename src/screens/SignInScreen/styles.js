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
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  textTitle: {
    color: COLORS.textBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  textSubTitle: {
    color: COLORS.textBlack,
    fontFamily: 'GochiHand-Regular',
    fontSize: 40,
  },
});
