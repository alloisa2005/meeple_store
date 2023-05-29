import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  accountTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  accountSubTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    color: COLORS.cardinal,
  },
});
