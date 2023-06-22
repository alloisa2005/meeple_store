import { ScaledSheet } from 'react-native-size-matters';

import { COLORS } from '../../constants/colors';

export const styles = ScaledSheet.create({
  tabBarLabelStyleActive: {
    fontSize: '10@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.cardinal,
  },
  tabBarLabelStyleInactive: {
    fontSize: '10@s',
    fontFamily: 'Montserrat-Bold',
    color: COLORS.textGray,
  },
});
