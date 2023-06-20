import { AntDesign, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { FlagComponent, MyAlert } from '../../components';
import { COLORS } from '../../constants/colors';
import { signOut, updateUserAsync } from '../../redux/actions/auth.actions';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const { user, error, loading } = useSelector((state) => state.auth);
  const spanish = useSelector((state) => state.language.spanish);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);

  const onHanlerSignOut = () => {
    dispatch(signOut());
  };

  const onHandlerUpdateUser = () => {
    if (name.trim() === '' || email.trim() === '' || address.trim() === '') {
      dispatch({
        type: 'UPDATE_FAILURE',
        payload: 'Please, fill all the fields',
      });
    } else {
      const updatedUser = { id: user.id, name, email, address };
      dispatch(updateUserAsync(updatedUser));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {error && <MyAlert spanish={spanish} message={error} />}
        <View style={styles.userImageContainer}>
          {/* Imagen usuario */}
          <View style={styles.imageContainer}>
            {user.imageUrl ? (
              <Image source={{ uri: user.imageUrl }} style={styles.image} />
            ) : (
              <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.image} />
            )}
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

            <TouchableOpacity style={styles.button} onPress={onHandlerUpdateUser}>
              {loading ? (
                <ActivityIndicator size={21} color={COLORS.white} />
              ) : (
                <Text style={styles.textButton}>{spanish ? 'Editar Usuario' : 'Edit Profile'}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Titulo Preferencias */}
        <View style={styles.preferencesContainer}>
          <Text style={styles.preferencesContainerTitle}>
            {spanish ? 'Preferencias' : 'Preferences'}
          </Text>
        </View>

        <View style={styles.preferencesItemContainer}>
          <Text style={styles.preferencesItemTitle}>{spanish ? 'Idioma' : 'Language'}</Text>
          <FlagComponent />
        </View>
        <View style={styles.separator} />

        {/* <View style={styles.preferencesItemContainer}>
        <Text style={styles.preferencesItemTitle}>{spanish ? 'Modo Oscuro' : 'Dark Mode'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#767577' }}
          thumbColor={isEnabled ? COLORS.cardinal : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} /> */}

        <TouchableOpacity onPress={onHanlerSignOut} style={styles.preferencesItemContainer}>
          <Text style={styles.preferencesItemTitle}>{spanish ? 'Cerrar Sesión' : 'LogOut'}</Text>
          <AntDesign name="logout" size={28} color={COLORS.cardinal} />
        </TouchableOpacity>

        <View style={styles.separator} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SettingsScreen;
