/*
Crear dos funciones que retornen los valores correctos,
No utilizar FOR ni WHILE, debe ser resuelto utilizadon map y filter.
Los datos que deben ser retornados son:
 - El listado de los desarrolladores que tengan "JavaScript"como habilidad.
 - El listado de los proyectos en el que sus desarrolladores trabajan.
*/

//Data

const datos = [
  {
    id: 1,
    nombre: "Juan",
    habilidades: ["JavaScript", "HTML", "CSS"],
    proyectos: [
      { id: 1, nombre: "Proyecto 1" },
      { id: 2, nombre: "Proyecto 2" },
    ],
  },
  {
    id: 2,
    nombre: "María",
    habilidades: ["Python", "SQL", "Django"],
    proyectos: [
      { id: 3, nombre: "Proyecto 3" },
      { id: 4, nombre: "Proyecto 3" },
    ],
  },
  {
    id: 3,
    nombre: "Pedro",
    habilidades: ["Java", "Spring", "Hibernate"],
    proyectos: [
      { id: 5, nombre: "Proyecto 5" },
      { id: 6, nombre: "Proyecto 6" },
    ],
  },
];

//Your functions here
const getDevBySkill = (devsData, skill) => {
  const dev = devsData
    .filter(({ habilidades }) => habilidades.includes(skill))
    .map(({ id, nombre, habilidades, proyectos }) => ({
      id,
      nombre,
      habilidades,
      proyectos,
    }));
  return dev;
};

const getProjectsName = (data) => {
  const proyectos = data.map(({ proyectos }) =>
    proyectos.map(({ nombre }) => nombre)
  );
  return proyectos.flat();
};

//Test

const javaScriptDev = getDevBySkill(datos, "JavaScript");
console.log(javaScriptDev);

const projectsName = getProjectsName(datos);
console.log(projectsName);
