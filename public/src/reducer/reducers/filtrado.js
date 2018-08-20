export default (estado = "SHOW-ALL", accion) => {
    switch (accion.type) {
      case "SET-VISIBILITY-FILTER":
        return accion.filtro;
      default:
        return estado;
    }
  };