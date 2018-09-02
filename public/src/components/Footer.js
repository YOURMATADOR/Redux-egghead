import { VisiblesFiltro } from "./Link";
import React from "react";
// ? pasa el tipo de filtro a cada uno de los componentes y el texto que contendra o children
export const Footer = () => (
  <h1>
    Mostrar:
    <VisiblesFiltro filtro="/all">Todo</VisiblesFiltro>
    <VisiblesFiltro filtro="/active">Activos</VisiblesFiltro>
    <VisiblesFiltro filtro="/inactive">Inactivos</VisiblesFiltro>
  </h1>
);
