/*
  Crear una función que reciba un string y devuelva otro string 
  que inicie indicando la logitud de sus caracteres y 
   a continuación el string "al revés".
  Ej:
  input = "string";
  resultadoEsperado = "6 gnirts"
*/

//Strings
const input1 = "string";

const input2 = "variable";

const input3 = "pointer";

//Your function
const reversedString = (word) => {
  const reversed = word.split("").reverse().join("");
  const show = `${reversed.length} ${reversed}`;
  return show;
};

//tests
const one = reversedString(input1);
const two = reversedString(input2);
const three = reversedString(input3);
console.log(one);
console.log(two);
console.log(three);
