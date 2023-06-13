import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10@s',
    marginTop: '5@vs',
    marginBottom: '10@vs',
  },
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
  listContainer: {
    flex: 1,
  },
});
