export const recortarTexto = (texto, len) => {
  if (texto.length > 14) {
    return texto.substring(0, len) + '...';
  }
  return texto;
};
