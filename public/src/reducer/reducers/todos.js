import { combineReducers } from "redux";

const ReducerAccion = (arreglo = {}, accion) => {
  switch (accion.type) {
    case "ADD-TODO":
      return {
        id: accion.id,
        texto: accion.texto,
        completado: false
      };
    case "TOOGLE-TODO":
      return arreglo.id !== accion.id
        ? arreglo
        : { ...arreglo, completado: !arreglo.completado };

    default:
      return arreglo;
  }
};

// const reducer = (arreglo = {}, accion) => {
//   switch (accion.type) {
//     case "ADD-TODO":
//       return [...arreglo, ReducerAccion(undefined, accion)];
//     case "TOOGLE-TODO":
//       return arreglo.map(i => ReducerAccion(i, accion));
//     default:
//       return arreglo;
//   }
// };

const porId = (arreglo = {}, accion) => {
  switch (accion.type) {
    case "ADD-TODO":
    case "TOOGLE-TODO":
      return {
        ...arreglo,
        [accion.id]: ReducerAccion(arreglo[accion.id], accion)
      };
    default:
      return arreglo;
  }
};

const ids = (arreglo = [], accion) => {
  switch (accion.type) {
    case "ADD-TODO":
      return [...arreglo, accion.id];
    default:
      return arreglo;
  }
};

export default combineReducers({ porId, ids });
