import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { styles } from './styles';
import { FlagComponent } from '../../components';
import { COLORS } from '../../constants/colors';

const SignUpScreen = ({ navigation }) => {
  const { language } = useSelector((state) => state.language);

  const goToSignInScreen = () => {
    navigation.navigate('SignIn');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLeft}>
          <TouchableOpacity onPress={goToSignInScreen}>
            <AntDesign name="arrowleft" size={27} color={COLORS.cardinal} />
          </TouchableOpacity>
          <Text style={styles.title}>
            {language === 'es' ? 'Crea una cuenta' : 'Create Account'}
          </Text>
        </View>
        <FlagComponent />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={{ position: 'relative', marginBottom: 15 }}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.image} />
          </View>
          <TouchableOpacity>
            <Feather name="camera" size={24} style={styles.cameraIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.containerGlass}>
          <View style={styles.inputsContainer}>
            <AntDesign name="user" size={24} color={COLORS.cardinal} />
            <TextInput
              placeholder={language === 'es' ? 'Nombre' : 'Name'}
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Entypo name="email" size={24} color={COLORS.cardinal} />
            <TextInput placeholder="Email" style={styles.textInput} />
          </View>

          <View style={styles.inputsContainer}>
            <Entypo name="location-pin" size={24} color={COLORS.cardinal} />
            <TextInput
              placeholder={language === 'es' ? 'Dirección' : 'Address'}
              style={styles.textInput}
            />
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
              <Text style={styles.textButton}>
                {language === 'es' ? 'Crear cuenta' : 'Create Account'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.accountTitle}>
            {language === 'es' ? '¿Ya tienes una cuenta?' : 'Already have an account?'}
          </Text>
          <TouchableOpacity onPress={goToSignInScreen}>
            <Text style={styles.accountSubTitle}>
              {language === 'es' ? 'Inicia Sesión' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
