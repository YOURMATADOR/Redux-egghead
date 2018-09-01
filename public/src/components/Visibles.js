import React from "react";
import { connect } from "react-redux";
import { Todo } from "./Todo";
import { toogleTodo } from "../reducer/actions/todos";
import { filtrarTodos } from "../reducer/actions/filtrarTodos";

let Todos = ({ elementosFiltrados, func }) => ( // ? filtra los todos de acuerdo a el texto y el tipo de filtro espeficicados 
  <ul>
    {elementosFiltrados.map(i => ( //* agrega por medio de map todos y cada uno de los maps unicos con el id unico como  key para evitar errores de render
      <Todo key={i.id} {...i} funcion={() => func(i.id)} />
    ))}
  </ul>
);
const RetornaElementosFiltrados = state => ({
  elementosFiltrados: filtrarTodos(state.Reducer, state.Filtrado) //? filtra por medio de los fitros especificados en la store los parametros necesarios son la store.Reducer y el filtro respectivamente
});

const RetornaFuncionOnClick = dispatch => ({
  func: id => {
    dispatch(toogleTodo({ id })); // ? cambia el tipo de completado a incompleto y viceversa 
  }
});

export const TodosVisibles = connect(
  RetornaElementosFiltrados,
  RetornaFuncionOnClick
)(Todos);
