import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
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
          <TextInput placeholder="Password" style={styles.textInput} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
