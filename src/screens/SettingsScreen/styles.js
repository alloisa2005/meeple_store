import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '13@s',
  },
  userImageContainer: {
    position: 'relative',
    marginBottom: 15,
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
    marginBottom: '10@vs',
  },
  image: {
    height: '90@s',
    width: '90@s',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: COLORS.cardinal,
    color: COLORS.textBlack,
    paddingVertical: '10@vs',
    paddingHorizontal: '15@s',
    borderRadius: 10,
    minWidth: '160@s',
    alignItems: 'center',
    marginBottom: '13@vs',
  },
  textButton: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '13@s',
    color: COLORS.white,
  },
  preferencesContainer: {
    width: '100%',
    backgroundColor: COLORS.textGray,
    paddingVertical: '7@vs',
    alignItems: 'center',
  },
  preferencesContainerTitle: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: '16@s',
  },
});
