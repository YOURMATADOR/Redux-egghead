export const agregarTodo = ({ id = 0, texto = "" } = {}) => ({
  type: "ADD-TODO",
  texto,
  id
});

export const toogleTodo = ({ id = 0 }) => ({
  type: "TOOGLE-TODO",
  id
});
