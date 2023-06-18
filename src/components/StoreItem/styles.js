import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    margin: 5,
    borderRadius: '10@s',
    paddingVertical: '7@vs',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '120@s',
    height: '100@vs',
    resizeMode: 'contain',
  },
  contentContainer: {
    marginTop: '6@vs',
    paddingHorizontal: '7@s',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
    fontSize: '14@s',
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textGray,
    fontSize: '12@s',
    marginBottom: '5@vs',
  },
});
