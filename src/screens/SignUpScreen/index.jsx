import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const SignUpScreen = ({ navigation }) => {
  const goToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={goToSignInScreen}>
          <AntDesign name="arrowleft" size={27} color={COLORS.cardinal} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.contentContainer}>
        {/* <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} /> */}

        <View style={styles.accountContainer}>
          <Text style={styles.accountTitle}>Already have an account?</Text>
          <TouchableOpacity onPress={goToSignInScreen}>
            <Text style={styles.accountSubTitle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
