import React from "react";
import { connect } from "react-redux";
import { Todo } from "./Todo";
import { toogleTodo } from "../reducer/actions/todos";
import { filtrarTodos } from "../reducer/actions/filtrarTodos";

let Todos = ({ elementosFiltrados, func }) => (
  <ul>
    {elementosFiltrados.map(i => (
      <Todo key={i.id} {...i} funcion={() => func(i.id)} />
    ))}
  </ul>
);
const RetornaElementosFiltrados = state => ({
  elementosFiltrados: filtrarTodos(state.Reducer, state.Filtrado)
});

const RetornaFuncionOnClick = dispatch => ({
  func: id => {
    dispatch(toogleTodo({ id }));
  }
});

export const TodosVisibles = connect(
  RetornaElementosFiltrados,
  RetornaFuncionOnClick
)(Todos);
