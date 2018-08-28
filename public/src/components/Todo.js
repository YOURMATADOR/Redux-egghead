import React from "react";

export let Todo = ({ id, texto, completado, funcion }) => (
  <li
    key={id}
    onClick={funcion}
    style={{ textDecoration: completado ? "line-through" : "none" }}
  >
    {texto}
  </li>
);
