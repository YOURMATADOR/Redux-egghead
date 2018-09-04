const obtenerReducer = reducer => reducer.ids.map(id => reducer.porId[id]);

export const filtrarTodos = ({ Reducer }, filtro) => {
  let reducers = obtenerReducer(Reducer);
  switch (filtro) {
    case "all":
      return reducers;
    case "active":
      return reducers.filter(e => e.completado);
    case "inactive":
      return reducers.filter(e => !e.completado);
    default:
    return Reducer;
  }
};
