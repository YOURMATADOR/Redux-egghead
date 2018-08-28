export const getTodos = () => {
  try {
    let todos = localStorage.getItem("todos");
    if (todos === null) {
      return undefined;
    }
    return JSON.parse(todos);
  } catch (e) {
    return undefined;
  }
};

// ? Guarda el estado del store (solo los todos) en el almacenamiento local (navegador)

export const saveTodos = todos => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (e) {}
};
