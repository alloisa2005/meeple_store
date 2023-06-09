import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { MyAlert } from '../../components';
import { COLORS } from '../../constants/colors';
import { deleteUserDB, getUserByEmailDB, getUserDB, insertUserDB } from '../../db';
import { signIn } from '../../redux/actions/auth.actions';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { error, loading } = useSelector((state) => state.auth);
  const spanish = useSelector((state) => state.language.spanish);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const onChangeEmail = (val) => setEmail(val);
  const onChangePassword = (val) => setPassword(val);

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const onHandleSignIn = async (email, password) => {
    if (!email || !password) {
      dispatch({
        type: 'SIGNIN_FAILURE',
        payload: 'Please, fill all the fields',
      });
    } else {
      const user = { email, password };

      if (isChecked) {
        const result = await getUserByEmailDB(email);
        const user = result.rows._array[0];

        if (!user) {
          await insertUserDB(email, password);
        }
      } else {
        await deleteUserDB(email);
      }

      dispatch(signIn(user));
    }
  };

  useEffect(() => {
    const initUser = async () => {
      const res = await getUserDB();
      const user = res.rows._array[0];
      if (user) {
        setEmail(user.email);
        setPassword(user.pass);
        setChecked(true);
      }
    };
    initUser();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.container}>
        {error && <MyAlert spanish={spanish} message={error} />}

        <Image source={require('../../../assets/imgs/meeple3.png')} style={styles.image} />
        <Text style={styles.textTitle}>{spanish ? 'Bienvenido a' : 'Welcome to'}</Text>
        <Text style={styles.textSubTitle}>Meeple Land</Text>

        <View style={styles.containerGlass}>
          <View style={styles.inputsContainer}>
            <Entypo name="email" size={24} color={COLORS.cardinal} />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
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
              autoCapitalize="none"
              placeholder={spanish ? 'Contraseña' : 'Password'}
              style={styles.textInput}
              value={password}
              onChangeText={onChangePassword}
            />
          </View>

          <View style={styles.rememberContainer}>
            <Checkbox
              style={{ borderRadius: 20 }}
              value={isChecked}
              onValueChange={(val) => setChecked(!isChecked)}
              color={isChecked ? COLORS.cardinal : undefined}
            />
            <Text style={styles.rememberTitle}>{spanish ? 'Recuerdame' : 'Remember me'}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.button} onPress={() => onHandleSignIn(email, password)}>
              {loading ? (
                <ActivityIndicator size={22} color={COLORS.white} />
              ) : (
                <Text style={styles.textButton}>{spanish ? 'Inicia Sesión' : 'Sign In'}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.accountTitle}>
            {spanish ? '¿No tienes una cuenta?' : 'Don´t have an account?'}
          </Text>
          <TouchableOpacity onPress={goToSignUpScreen} disabled={loading}>
            <Text style={loading ? styles.accountSubTitleGray : styles.accountSubTitle}>
              {spanish ? 'Crea una' : 'Create one'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
