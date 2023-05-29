import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const SignInScreen = ({ navigation }) => {
  const [flag, setFlag] = useState('spain');

  const changeFlag = () => {
    if (flag === 'spain') {
      setFlag('usa');
    } else {
      setFlag('spain');
    }
  };

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={changeFlag} style={styles.flagContainer}>
        <Image
          source={
            flag === 'spain'
              ? require('../../../assets/imgs/spainFlag.png')
              : require('../../../assets/imgs/usaFlag.png')
          }
          style={styles.flagImage}
        />
      </TouchableOpacity>
      <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} />
      <Text style={styles.textTitle}>Welcome to</Text>
      <Text style={styles.textSubTitle}>Meeple Land</Text>

      <View style={styles.containerGlass}>
        <View style={styles.inputsContainer}>
          <Entypo name="email" size={24} color={COLORS.cardinal} />
          <TextInput placeholder="Email" style={styles.textInput} />
        </View>

        <View style={styles.inputsContainer}>
          <Entypo name="lock" size={24} color={COLORS.cardinal} />
          <TextInput secureTextEntry placeholder="Password" style={styles.textInput} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountTitle}>Don´t have an account?</Text>
        <TouchableOpacity onPress={goToSignUpScreen}>
          <Text style={styles.accountSubTitle}>Create one</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
