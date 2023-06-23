import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: '10@s',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    backgroundColor: COLORS.white,
    paddingVertical: '7@s',
    paddingHorizontal: '10@s',
    borderRadius: '5@s',
  },
  title: {
    fontSize: '13@s',
    fontFamily: 'Montserrat-Bold',
  },
  titleDetail: {
    fontSize: '14@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
  },
  graficaContainer: {
    flex: 1,
    paddingTop: '25@vs',
    marginVertical: '6@vs',
  },
  graficaTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: '16@s',
    color: COLORS.cardinal,
    marginBottom: '25@vs',
  },
  grafica: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noItemTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: '20@s',
    color: COLORS.cardinal,
  },
});
