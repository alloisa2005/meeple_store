export const translateError = (error = '') => {
  if (error.includes('INVALID_EMAIL')) return 'Email inválido';
  if (error.includes('EMAIL_NOT_FOUND')) return 'Email no registrado';
  if (error.includes('INVALID_PASSWORD')) return 'Contraseña inválida';
  if (error.includes('EMAIL_EXISTS')) return 'Email ya registrado';
  if (error.includes('WEAK_PASSWORD')) return 'Contraseña débil';
  if (error.includes('fill all the fields')) return 'Por favor, rellene todos los campos';
};
