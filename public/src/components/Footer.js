import { Visibles } from "./Link";
import React from "react";

export const Footer = () => (
  <h1>
    Mostrar:
    <Visibles filtro="SHOW-ALL">Todo</Visibles>
    <Visibles filtro="SHOW-ACTIVE">Activos</Visibles>
    <Visibles filtro="SHOW-INACTIVE">Inactivos</Visibles>
  </h1>
);
