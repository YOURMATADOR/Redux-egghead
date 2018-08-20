export const cambiarFiltro = ({ filtro = "SHOW-ALL" }) => ({
  type: "SET-VISIVILITY-FILTER",
  filtro
});
