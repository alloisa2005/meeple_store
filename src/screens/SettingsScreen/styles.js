import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '13@s',
    marginBottom: '10@vs',
  },
  userImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 120 / 2,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: COLORS.cardinal,
    color: COLORS.textBlack,
    paddingVertical: '10@vs',
    paddingHorizontal: '15@s',
    borderRadius: 10,
    minWidth: '160@s',
    alignItems: 'center',
    marginTop: '7@vs',
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
    marginBottom: '12@vs',
    borderRadius: 10,
  },
  preferencesContainerTitle: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: '16@s',
  },
  preferencesItemContainer: {
    height: '40@vs',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5@vs',
  },
  preferencesItemTitle: { fontFamily: 'Montserrat-Bold', fontSize: '14@s' },
  separator: {
    height: '2@vs',
    width: '100%',
    backgroundColor: COLORS.cardinal,
    marginVertical: '1@vs',
  },
  containerGlass: {
    marginTop: '10@vs',
    marginBottom: '18@vs',
    backgroundColor: 'white',
    borderRadius: '7@s',
    width: '90%',
    padding: '15@s',
  },
  inputsContainer: {
    marginBottom: '10@vs',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '7@s',
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
});
