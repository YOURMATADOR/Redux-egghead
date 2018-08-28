export const filtrarTodos = (todos, filtro) => {
  switch (filtro) {
    case "SHOW-ALL":
      return todos;
      break;
    case "SHOW-ACTIVE":
      return todos.filter(e => e.completado);
    case "SHOW-INACTIVE":
      return todos.filter(e => !e.completado);
    default:
  }
};
