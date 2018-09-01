import React from "react";
import { v4 } from "node-uuid";
import { connect } from "react-redux";
// ? al dar click en el boton agrega un nuevo TODO y ejecuta un distpatch para guardarlo en la store
import { agregarTodo } from "../reducer/actions/todos";

let Agregar = ({ onClick }) => {
  // * es un metodo que se pasa por medio de una variable objeto con esto no ahoramos el tner que acceder a el metodo o variables por medio de props
  let entrada;

  return (
    <div>
      <input
        type="text"
        ref={e => {
          // * crea una referencia del valor de la entrada para que sea mas facil conocer el valor
          entrada = e;
        }}
      />
      <button
        onClick={() => {
          // ? ejecuta una funcion para poder agregar el valor de la entrada ya que si no de ejecuta una funcion no  es posible pasar el valor a la funcion onclick
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
  //* pasa variables a el componente Agregar en este caso un objeto con el metodo onClick que guarda el valor de la entrada en la store cada vez que se presiona el boton
  onClick(texto) {
    dispatch(agregarTodo({ id: v4(), texto }));
  }
});

export const AgregarTodo = connect(
  // ? export el componete con un subscribe es decir que se ejecutara  u obtendra la informacion mas reciente cada vez que se actualize algun elemento en el reducer
  undefined,
  mapDispatchToProps
)(Agregar);
