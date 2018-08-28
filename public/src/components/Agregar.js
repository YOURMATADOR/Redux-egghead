import React from "react";
import { v4 } from "node-uuid";
import { connect } from "react-redux";

import { agregarTodo } from "../reducer/actions/todos";

let Agregar = ({ onClick }) => {
  let entrada;

  return (
    <div>
      <input
        type="text"
        ref={e => {
          entrada = e;
        }}
      />
      <button
        onClick={() => {
          onClick(entrada.value);

          // dispatch({
          //   type: "ADD-TODO",
          //   texto: entrada.value,
          //   id: contador++s
          // });
          entrada.value = "";
        }}
      >
        imprimir estado
      </button>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  onClick(texto) {
    dispatch(agregarTodo({ id: v4(), texto }));
  }
});

export const AgregarTodo = connect(
  undefined,
  mapDispatchToProps
)(Agregar);
