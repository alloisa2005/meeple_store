import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { FlagComponent, MyAlert } from '../../components';
import { COLORS } from '../../constants/colors';
import { signIn } from '../../redux/actions/auth.actions';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const spanish = useSelector((state) => state.language.spanish);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const onChangeEmail = (val) => {
    setEmail(val);
  };
  const onChangePassword = (val) => {
    setPassword(val);
  };

  const onHandleSignIn = (email, password) => {
    if (!email || !password) {
      dispatch({
        type: 'SIGNIN_FAILURE',
        payload: spanish ? 'Por favor, rellene todos los campos' : 'Please, fill all the fields',
      });
    } else {
      const user = {
        email,
        password,
      };

      dispatch(signIn(user));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error && <MyAlert spanish={spanish} message={error} />}
      <View style={styles.flagContainer}>
        <FlagComponent />
      </View>

      <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} />
      <Text style={styles.textTitle}>{spanish ? 'Bienvenido a' : 'Welcome to'}</Text>
      <Text style={styles.textSubTitle}>Meeple Land</Text>

      <View style={styles.containerGlass}>
        <View style={styles.inputsContainer}>
          <Entypo name="email" size={24} color={COLORS.cardinal} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={onChangeEmail}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Entypo name="lock" size={24} color={COLORS.cardinal} />
          <TextInput
            secureTextEntry
            placeholder={spanish ? 'Contraseña' : 'Password'}
            style={styles.textInput}
            value={password}
            onChangeText={onChangePassword}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.button} onPress={() => onHandleSignIn(email, password)}>
            <Text style={styles.textButton}>{spanish ? 'Inicia Sesión' : 'Sign In'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountTitle}>
          {spanish ? '¿No tienes una cuenta?' : 'Don´t have an account?'}
        </Text>
        <TouchableOpacity onPress={goToSignUpScreen}>
          <Text style={styles.accountSubTitle}>{spanish ? 'Crea una' : 'Create one'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
