import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const SignUpScreen = ({ navigation }) => {
  const goToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>

      <View style={styles.accountContainer}>
        <Text style={styles.accountTitle}>Already have an account?</Text>
        <TouchableOpacity onPress={goToSignInScreen}>
          <Text style={styles.accountSubTitle}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
