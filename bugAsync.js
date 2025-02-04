/*
Solucionar el bug de una llamada asíncrona 
que nos permite obtener un usuario, de momento
siempre nos devuelve 'undefine' al ser ejecutada.
*/

/*

function obtenerUsuario(id) {
  let usuario;

  setTimeout(() => {
    if (id === 1) {
      usuario = { id: 1, nombre: "John Doe" };
    }
  }, 2000);
  return usuario;
}

const usuario = obtenerUsuario(1);
console.log(usuario);

<------------------------------------------------------------>

La función utilizada para retornar el usuario tenía varios problemas,
el primero es que no se estaba declarando como una función asyncrona,
ya sea con async/await o retornando una promesa por tanto se retornaba
'usuario' sin asignarle un valor.

Al declarar usuario al inicio de la función sin asignarle un valor 
nos devolvía siempre 'undefined', ya que es el valor por defecto
de cualquier variable a la que no le asignamos un valor.

Al final de la función al retornar usuario devolvíamos 'undefined' siempre.
*/

//Solution
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    //retorna una promesa
    setTimeout(() => {
      if (id === 1) {
        usuario = { id: 1, nombre: "John Doe" }; //asigna el valor luego de 2000 milisegundos
        resolve(usuario);
      } else {
        reject("Usuario no encontrado"); //si id no es correcto
      }
    }, 2000);
  });
}

obtenerUsuario(1)
  .then((usuario) => {
    // si resuelve lo muestro en consola
    console.log(usuario);
  })
  .catch((error) => {
    // si no es correcto atrapo el error
    console.error(error);
  });
