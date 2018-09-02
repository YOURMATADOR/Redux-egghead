import { NavLink } from "react-router-dom";
import React from "react";

export const VisiblesFiltro = ({ filtro, children }) => (
  <NavLink
    to={filtro}
    activeStyle={{
      textDecoration: "none",
      color: "red"
    }}
  >
    {children}
  </NavLink>
);
