import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useDispatch } from 'react-redux';

import { COLORS } from '../../constants/colors';
import { translateError } from '../../utils/translateError';

const MyAlert = ({ message, spanish }) => {
  const dispatch = useDispatch();

  const cleanError = () => {
    dispatch({ type: 'CLEAN_ERROR', payload: '' });
  };

  return (
    <AwesomeAlert
      show
      showProgress={false}
      title="Error"
      message={translateError(spanish, message)}
      closeOnTouchOutside={false}
      closeOnHardwareBackPress={false}
      showConfirmButton
      confirmText="OK"
      titleStyle={{ fontSize: 22, fontFamily: 'Montserrat-Bold' }}
      confirmButtonColor={COLORS.cardinal}
      confirmButtonStyle={{ width: 100, alignItems: 'center' }}
      confirmButtonTextStyle={{ fontSize: 17, fontFamily: 'Montserrat-Bold' }}
      messageStyle={{ fontSize: 16, fontFamily: 'Montserrat-Regular' }}
      contentContainerStyle={{ width: '90%' }}
      onCancelPressed={cleanError}
      onConfirmPressed={cleanError}
    />
  );
};

export default MyAlert;
