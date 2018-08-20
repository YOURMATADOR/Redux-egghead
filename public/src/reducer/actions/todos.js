export const agregarTodo = ({ id = 0, texto = "" } = {} = {
  type: "ADD-TODO",
  texto,
  id
});

export const toogleTodo = ({ id = null } = {}) => ({
  type: "TOOGLE-TODO",
  id
});
