import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { FlagComponent } from '../../components';
import { COLORS } from '../../constants/colors';
import { signOut } from '../../redux/actions/auth.actions';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const spanish = useSelector((state) => state.language.spanish);
  const user = useSelector((state) => state.auth.user);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onHanlerSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <View style={styles.userImageContainer}>
        {/* Imagen usuario */}
        <View style={styles.imageContainer}>
          <Image source={require('../../../assets/imgs/userBlank.png')} style={styles.image} />
        </View>

        {/* Boton Editar Perfil */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>{spanish ? 'Editar Usuario' : 'Edit Profile'}</Text>
        </TouchableOpacity>
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

      <View style={styles.preferencesItemContainer}>
        <Text style={styles.preferencesItemTitle}>{spanish ? 'Modo Oscuro' : 'Dark Mode'}</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#767577' }}
          thumbColor={isEnabled ? COLORS.cardinal : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.separator} />

      <TouchableOpacity onPress={onHanlerSignOut} style={styles.preferencesItemContainer}>
        <Text style={styles.preferencesItemTitle}>{spanish ? 'Cerrar Sesión' : 'LogOut'}</Text>
        <AntDesign name="logout" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>

      <View style={styles.separator} />
    </View>
  );
};

export default SettingsScreen;
