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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { FlagComponent } from '../../components';
import MyAlert from '../../components/MyAlert';
import { COLORS } from '../../constants/colors';
import { signUp } from '../../redux/actions/auth.actions';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const spanish = useSelector((state) => state.language.spanish);
  const loading = useSelector((state) => state.auth.loading);

  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const onHandleCreateAccount = (name, email, address, password) => {
    setShowAlert(false);
    if (!name || !email || !address || !password) {
      setShowAlert(true);
    } else {
      const user = {
        name,
        email,
        address,
        password,
      };

      dispatch(signUp(user));

      setName('');
      setEmail('');
      setAddress('');
      setPassword('');
    }
  };

  const goToSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyAlert
        setShowAlert={setShowAlert}
        spanish={spanish}
        showAlert={showAlert}
        message={spanish ? 'Todos los campos son requeridos' : 'All fields are required'}
      />

      <View style={styles.titleContainer}>
        <View style={styles.titleLeft}>
          <TouchableOpacity onPress={goToSignInScreen}>
            <AntDesign name="arrowleft" size={27} color={COLORS.cardinal} />
          </TouchableOpacity>
          <Text style={styles.title}>{spanish ? 'Crea una cuenta' : 'Create Account'}</Text>
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
                <ActivityIndicator size={20} color={COLORS.white} />
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
    </SafeAreaView>
  );
};

export default SignUpScreen;
