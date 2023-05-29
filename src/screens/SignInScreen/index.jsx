import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { FlagComponent } from '../../components';
import { COLORS } from '../../constants/colors';

const SignInScreen = ({ navigation }) => {
  const { language } = useSelector((state) => state.language);

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.flagContainer}>
        <FlagComponent />
      </View>

      <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} />
      <Text style={styles.textTitle}>{language === 'es' ? 'Bienvenido a' : 'Welcome to'}</Text>
      <Text style={styles.textSubTitle}>Meeple Land</Text>

      <View style={styles.containerGlass}>
        <View style={styles.inputsContainer}>
          <Entypo name="email" size={24} color={COLORS.cardinal} />
          <TextInput placeholder="Email" style={styles.textInput} />
        </View>

        <View style={styles.inputsContainer}>
          <Entypo name="lock" size={24} color={COLORS.cardinal} />
          <TextInput
            secureTextEntry
            placeholder={language === 'es' ? 'Contraseña' : 'Password'}
            style={styles.textInput}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{language === 'es' ? 'Inicia Sesión' : 'Sign In'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountTitle}>
          {language === 'es' ? '¿No tienes una cuenta?' : 'Don´t have an account?'}
        </Text>
        <TouchableOpacity onPress={goToSignUpScreen}>
          <Text style={styles.accountSubTitle}>
            {language === 'es' ? 'Crea una' : 'Create one'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
