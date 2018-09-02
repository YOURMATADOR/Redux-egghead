export const filtrarTodos = (todos, filtro) => {
  switch (filtro) {
    case "all":
      return todos;
    case "active":
      return todos.filter(e => e.completado);
    case "inactive":
      return todos.filter(e => !e.completado);
    default:
  }
};
