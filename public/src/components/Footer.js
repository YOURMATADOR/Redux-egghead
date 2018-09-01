import { Visibles } from "./Link";
import React from "react";

export const Footer = () => (
  <h1>
    Mostrar:
    <Visibles filtro="SHOW-ALL">Todo</Visibles> // ? pasa el tipo de filtro a cada uno de los componentes y el texto que contendra o children
    <Visibles filtro="SHOW-ACTIVE">Activos</Visibles>
    <Visibles filtro="SHOW-INACTIVE">Inactivos</Visibles>
  </h1>
);
 // ?