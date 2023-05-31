import React from 'react';
import { View, Text } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import { COLORS } from '../../constants/colors';

const MyAlert = ({ showAlert, message, setShowAlert }) => {
  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title="Error"
      message={message}
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
      onCancelPressed={() => {
        setShowAlert(false);
      }}
      onConfirmPressed={() => {
        setShowAlert(false);
      }}
    />
  );
};

export default MyAlert;
