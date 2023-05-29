import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} />
      <Text style={styles.textTitle}>Welcome to</Text>
      <Text style={styles.textSubTitle}>Meeple Land</Text>

      <View>
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
