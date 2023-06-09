import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: '7@vs',
    marginBottom: '7@vs',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5@vs',
  },
  itemImage: {
    width: '22%',
    height: '80@vs',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: '14@vs',
    fontFamily: 'Montserrat-Regular',
    color: COLORS.black,
    marginLeft: '7@s',
  },
});
