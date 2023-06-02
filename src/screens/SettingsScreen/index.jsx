import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { FlagComponent } from '../../components';
import { COLORS } from '../../constants/colors';
import { signOut } from '../../redux/actions/auth.actions';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const spanish = useSelector((state) => state.language.spanish);

  const onHanlerSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 17 }}>
          {spanish ? 'Idioma' : 'Language'}
        </Text>
        <FlagComponent />
      </View>
      <View
        style={{ height: 2, width: '100%', backgroundColor: COLORS.cardinal, marginVertical: 10 }}
      />
      <Text>SettingsScreen</Text>
      <View
        style={{ height: 2, width: '100%', backgroundColor: COLORS.cardinal, marginVertical: 10 }}
      />
      <TouchableOpacity
        onPress={onHanlerSignOut}
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>{spanish ? 'Cerrar Sesión' : 'LogOut'}</Text>
        <AntDesign name="logout" size={28} color={COLORS.cardinal} />
      </TouchableOpacity>
      <View
        style={{ height: 2, width: '100%', backgroundColor: COLORS.cardinal, marginVertical: 10 }}
      />
    </View>
  );
};

export default SettingsScreen;
