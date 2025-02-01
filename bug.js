/*
Arreglar el bug:
Nuestro cliente intenta calcular el promedio de una lista de números
pero nos dice que no funciona.
No nos da el error, solo el código y debemos solucionar el problema.
*/

// Código proporcionado por el cliente

const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }

  const promedio = sumaTotal / numeros.length;

  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);

/* El error se encontraba en la línea 13 ya que la condición
  Establecía que el bucle debía continuar hasta que fuera menor o *igual*
  a la longitud de la lista, esto daba como resultado que el indice
  avanzaba 6 posiciones en un array de 5 posiciones.
*/
