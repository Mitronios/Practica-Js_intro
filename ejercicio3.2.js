/*
  Crear una función que me permita recibir números y 
  que me devuelva un string separando cada número por un guión (-).
  Ej:
  input = 10;
  resultadoEsperado = "1-0"
*/

//Numbers to transform
const input = 10;

const secondInput = 1;

const thirdInput = 11234;

//Your function
const hyphenedNumbers = (number) => {
  const hyphened = String(number).split("").join("-");
  return hyphened;
};

//tests
const first = hyphenedNumbers(input);
const second = hyphenedNumbers(secondInput);
const third = hyphenedNumbers(thirdInput);

console.log(first);
console.log(second);
console.log(third);
