export const separadorDeMiles = (numero) => {
  // Convertir el número a una cadena de texto
  const numeroString = numero.toString();

  // Separar la parte entera de la parte decimal (si existe)
  const partes = numeroString.split('.');
  const parteEntera = partes[0];
  const parteDecimal = partes.length > 1 ? '.' + partes[1] : '';

  // Agregar el separador de miles a la parte entera
  let separado = '';
  for (let i = parteEntera.length - 1; i >= 0; i--) {
    separado = parteEntera.charAt(i) + separado;
    if (i > 0 && (parteEntera.length - i) % 3 === 0) {
      separado = '.' + separado;
    }
  }

  // Concatenar la parte entera separada con la parte decimal (si existe)
  const resultado = separado + parteDecimal;

  return resultado;
};
