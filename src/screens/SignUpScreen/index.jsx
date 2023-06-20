import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { launchCameraAsync } from 'expo-image-picker';
import { getCurrentPositionAsync } from 'expo-location';
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
import { LOCATION_API_KEY } from '../../constants/firebase.js';
import { signUp } from '../../redux/actions/auth.actions';
import { verifyPermissionsCamera, verifyPermissionsLocation } from '../../utils/verifyPermissions';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const spanish = useSelector((state) => state.language.spanish);

  /* const [showAlert, setShowAlert] = useState(false); */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pickedUrl, setPickedUrl] = useState(null);
  const [coords, setCoords] = useState({});

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissionsCamera();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    // Obtengo la imagen de esta manera por unos warnings que aparecían
    // de que iba a ser deprecada la propiedad uri
    setPickedUrl(image.assets[0].uri);
  };

  const onHandlerGetAddress = async () => {
    try {
      setAddress('Buscando dirección...');
      const isLocationPermitted = await verifyPermissionsLocation();
      if (!isLocationPermitted) return;

      const location = await getCurrentPositionAsync({
        timeout: 5000,
      });

      console.log('location: ', location);

      setCoords({ lat: location.coords.latitude, lng: location.coords.longitude });

      try {
        const res = await fetch(
          `http://api.positionstack.com/v1/reverse?access_key=${LOCATION_API_KEY}&query=${coords.lat},${coords.lng}&limit=1`
        );
        const data = await res.json();

        console.log('data: ', data);
        setAddress(`${data.data[0].street} ${data.data[0].number}`);
      } catch (error) {
        setAddress('Intente nuevamente');
      }
    } catch (error) {
      console.log('error: ', error);
      setAddress('');
    }
  };

  const onHandleCreateAccount = async (name, email, address, password, pickedUrl) => {
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
      const user = { name, email, address, password, pickedUrl };
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
            {!pickedUrl ? (
              <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.image} />
            ) : (
              <Image source={{ uri: pickedUrl }} style={styles.image} />
            )}
          </View>
          <TouchableOpacity onPress={onHandleTakeImage}>
            <MaterialIcons name="add-a-photo" size={27} style={styles.cameraIcon} />
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
            <TouchableOpacity style={styles.locationContainer} onPress={onHandlerGetAddress}>
              <Entypo name="location-pin" size={24} color={COLORS.cardinal} />
            </TouchableOpacity>
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
              onPress={() => onHandleCreateAccount(name, email, address, password, pickedUrl)}>
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
            <Text style={loading ? styles.accountSubTitleGray : styles.accountSubTitle}>
              {spanish ? 'Inicia Sesión' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
