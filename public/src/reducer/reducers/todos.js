const ReducerAccion = (arreglo = [], accion) => {
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
  
  export default (arreglo = [], accion) => {
    switch (accion.type) {
      case "ADD-TODO":
        return [...arreglo, ReducerAccion(undefined, accion)];
      case "TOOGLE-TODO":
        return arreglo.map(i => ReducerAccion(i, accion));
      default:
        return arreglo;
    }
  };