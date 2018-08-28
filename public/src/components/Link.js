import React from "react";
import { connect } from "react-redux";

import { cambiarFiltro } from "../reducer/actions/filtro";

const Link = ({ activo, children, func }) => {
  if (activo) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        func();
      }}
    >
      {" "}
      {children}
    </a>
  );
};

const RetornarEstadoActualVsEstadoSolicitado = (state, misProps) => {
  return {
    activo: misProps.filtro === state.Filtrado
  };
};

const RetornaFuncion = (dispatch, misProps) => {
  return {
    func: () => {
      dispatch(cambiarFiltro({ filtro: misProps.filtro }));
    }
  };
};

export const Visibles = connect(
  RetornarEstadoActualVsEstadoSolicitado,
  RetornaFuncion
)(Link);
