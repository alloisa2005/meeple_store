export const getFirstArrayElements = (array, cant) => {
  if (array.length > cant) {
    return array.slice(0, cant);
  } else {
    return array;
  }
};

export const sortArrayByRating = (array) => {
  return array.slice().sort((a, b) => b.ratings - a.ratings);
};

export const sortArrayByPrice = (array) => {
  return array.slice().sort((a, b) => b.price - a.price);
};

export const agregarCeroIzquierda = (dato) => {
  if (dato < 10) {
    return '0' + dato;
  } else {
    return dato.toString();
  }
};

export const agruparRegistrosPorFecha = (array) => {
  const agrupado = {};

  array.forEach((registro) => {
    const fecha = new Date(registro.date);
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript son base 0 (0-11)
    const año = fecha.getFullYear();

    const clave = `${año}/${agregarCeroIzquierda(mes)}`;

    if (!agrupado[clave]) {
      agrupado[clave] = 0;
    }

    agrupado[clave] += registro.total;
  });

  const resultado = Object.entries(agrupado).map(([clave, total]) => ({
    fecha: clave,
    total,
  }));

  resultado.sort((a, b) => {
    if (a.año === b.año) {
      return a.mes - b.mes;
    }
    return a.año - b.año;
  });

  return resultado;
};
