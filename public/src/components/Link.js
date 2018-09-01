import React from "react";
import { connect } from "react-redux";

import { cambiarFiltro } from "../reducer/actions/filtro";

const Link = ({ activo, children, func }) => {
  // ? al no tener que utilizar state se crea un componente como un metodo de es6 como una arrow function
  if (activo) {
    //? si el estado del filtro es el mismo que el estado de la store entonces se retorna un span para que no se pueda volver a dar click y asi aumentar el rendimiento
    return <span>{children}</span>; // * children es una propiedad que no que pasa dentro del las llaves <h propiedad={propiedad}> si no fuera como texto <h1>propiedad este es children</h1>
  }
  return (
    <a
      href="#" // ? link sin direccion
      onClick={e => {
        // * al dar click evitamos la redireccion y ejecuta la funcion pasada por medio de los parametros del componente
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
    activo: misProps.filtro === state.Filtrado //? reviza si la propiedad pasada es igual a el stado filtrado es decir si ya te encuentras en este estado de filtrado retorna verdadero
  };
};

const RetornaFuncion = (dispatch, misProps) => {
  return {
    func: () => { //? modifica el estado de filtro si este es diferente al actual
      dispatch(cambiarFiltro({ filtro: misProps.filtro }));
    }
  };
};

export const Visibles = connect(
  RetornarEstadoActualVsEstadoSolicitado,
  RetornaFuncion
)(Link); // * exporta el componente con la funcionalidad de store es decir un subscribe que permite obtener la informacion mas actual y asi poder renderizar cada que exista un cambio en la store
