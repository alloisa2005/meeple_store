import { requestCameraPermissionsAsync } from 'expo-image-picker';
import { requestForegroundPermissionsAsync } from 'expo-location';
import { Alert } from 'react-native';

export const verifyPermissionsCamera = async () => {
  const { status } = await requestCameraPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert('Permiso denegado', 'Necesitamos permisos para usar la camara', [{ text: 'Ok' }]);
    return false;
  }

  return true;
};

export const verifyPermissionsLocation = async () => {
  const { status } = await requestForegroundPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert('Permisos insuficientes', 'Necesitamos permisos para obtener la ubicacion', [
      { text: 'Ok' },
    ]);
    return false;
  }

  return true;
};
