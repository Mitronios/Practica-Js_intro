/*
  Crear una función que me permita recibir un "input",
  el cual será un array de strings y que me devuelva la unión
  de esos strings en uno solo siguiendo el siguiente ejemplo:
  input = ["Donwloads", "Videos", "capture", "mp4",]
  resultadoEsperado = "Downloads/Videos/Capture.mp4"
*/

//Arrays
const input1 = ["Donwloads", "Videos", "capture", "mp4"];

const input2 = ["CodingGame", "python", "py"];

const input3 = [
  "programming",
  "languages",
  "easy",
  "begginer",
  "useful",
  "pythonstuff",
  "py",
];

//Create your function here

const stringJoin = (input) => {
  const slashed = input.slice(0, input.length - 1).join("/");
  const path = slashed + "." + input[input.length - 1];
  return path;
};

//Testing
const mp4 = stringJoin(input1);
const py1 = stringJoin(input2);
const py2 = stringJoin(input3);

console.log(mp4);
console.log(py1);
console.log(py2);
