export const translateError = (spanish = false, error = '') => {
  if (spanish && error.includes('INVALID_EMAIL')) return 'Email inválido';
  if (spanish && error.includes('EMAIL_NOT_FOUND')) return 'Email no registrado';
  if (spanish && error.includes('INVALID_PASSWORD')) return 'Contraseña inválida';
  if (spanish && error.includes('EMAIL_EXISTS')) return 'Email ya registrado';
  if (spanish && error.includes('WEAK_PASSWORD'))
    return 'La contraseña debe tener al menos 6 caracteres';
  if (spanish && error.includes('fill all the fields'))
    return 'Por favor, rellene todos los campos';
  if (spanish && error.includes('NETWORK')) return 'Error en el servidor, intente nuevamente';
  if (spanish && error.includes('IMAGE')) return 'Agregue una imagen de usuario';

  if (!spanish && error.includes('INVALID_EMAIL')) return 'Invalid email';
  if (!spanish && error.includes('EMAIL_NOT_FOUND')) return 'Email not registered';
  if (!spanish && error.includes('INVALID_PASSWORD')) return 'Invalid password';
  if (!spanish && error.includes('EMAIL_EXISTS')) return 'Email already registered';
  if (!spanish && error.includes('WEAK_PASSWORD')) return 'Password must be at least 6 characters';
  if (!spanish && error.includes('fill all the fields')) return 'Please fill all the fields';
  if (!spanish && error.includes('NETWORK')) return 'Server error, try again';
  if (!spanish && error.includes('IMAGE')) return 'Add a user image';
};
