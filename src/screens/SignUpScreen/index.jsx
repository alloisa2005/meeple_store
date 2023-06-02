import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { MyAlert } from '../../components';
import { COLORS } from '../../constants/colors';
import { signUp } from '../../redux/actions/auth.actions';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const spanish = useSelector((state) => state.language.spanish);

  /* const [showAlert, setShowAlert] = useState(false); */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const onHandleCreateAccount = (name, email, address, password) => {
    name = name.trim();
    email = email.trim();
    address = address.trim();
    password = password.trim();

    if (!name || !email || !address || !password) {
      dispatch({
        type: 'SIGNUP_FAILURE',
        payload: 'Please, fill all the fields',
      });
    } else {
      const user = { name, email, address, password };
      dispatch(signUp(user));
    }
  };

  const goToSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {error && <MyAlert spanish={spanish} message={error} />}
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
              autoCapitalize="words"
              autoCorrect={false}
              placeholder={spanish ? 'Nombre' : 'Name'}
              style={styles.textInput}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Entypo name="email" size={24} color={COLORS.cardinal} />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              style={styles.textInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Entypo name="location-pin" size={24} color={COLORS.cardinal} />
            <TextInput
              autoCapitalize="words"
              autoCorrect={false}
              placeholder={spanish ? 'Dirección' : 'Address'}
              style={styles.textInput}
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Entypo name="lock" size={24} color={COLORS.cardinal} />
            <TextInput
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
              placeholder={spanish ? 'Contraseña' : 'Password'}
              style={styles.textInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity
              disabled={loading}
              style={styles.button}
              onPress={() => onHandleCreateAccount(name, email, address, password)}>
              {loading ? (
                <ActivityIndicator size={22} color={COLORS.white} />
              ) : (
                <Text style={styles.textButton}>{spanish ? 'Crear cuenta' : 'Create Account'}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.accountTitle}>
            {spanish ? '¿Ya tienes una cuenta?' : 'Already have an account?'}
          </Text>
          <TouchableOpacity onPress={goToSignInScreen}>
            <Text style={styles.accountSubTitle}>{spanish ? 'Inicia Sesión' : 'Sign In'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
