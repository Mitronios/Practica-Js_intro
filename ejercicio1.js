/*
Crear un objeto llamado usuario con los siguientes campos:
Nombre,
Apellidos,
Lista de temas del bootcamp con nombre y fecha de inicio de cada módulo
con formato "YYYY-MM-DD".
Si estás en búqueda activa un valor true or false
* Mostrar por pantalla la fecha de inicio del módulo de react
*/

const usuario = {
  nombre: "Miguel Angel",
  apellidos: "Gonzales Melgar",
  modulosBootcamp: [
    {
      nombre: "Node.js",
      fechaInicio: "2025/02/10",
    },
    { nombre: "git", fechaInicio: "2025/02/01" },
    { nombre: "react", fechaInicio: "2025/05/12" },
  ],
  busquedaActiva: false,
};

console.log(usuario.modulosBootcamp[2].fechaInicio); //Versión console.log

//Usando for of
for (const modulo of usuario.modulosBootcamp) {
  if (modulo.nombre == "react") {
    console.log(modulo.fechaInicio);
  }
}

//Con una función
const getModuleDate = (user, moduleName) => {
  let date = "";
  for (const modulo of user.modulosBootcamp) {
    if (modulo.nombre == moduleName) {
      date = date + modulo.fechaInicio;
    }
  }
  return date;
};

const startingDate = getModuleDate(usuario, "react");

console.log(`La fecha de inicio del módulo de react es ${startingDate}`);
