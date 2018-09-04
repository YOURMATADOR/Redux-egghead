import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Todo } from "./Todo";
import { toogleTodo } from "../reducer/actions/todos";
import { filtrarTodos } from "../reducer/actions/filtrarTodos";
import { fakeDatabase } from "../reducer/db/database";

//* agrega por medio de map todos y cada uno de los maps unicos con el id unico como  key para evitar errores de render
const Todos = (
  { elementosFiltrados, func } // ? filtra los todos de acuerdo a el texto y el tipo de filtro espeficicados
) => (
  <ul>
    {elementosFiltrados
      ? elementosFiltrados.map(i => (
          <Todo key={i.id} {...i} funcion={() => func(i.id)} />
        ))
      : ""}
  </ul>
);
class TodosVisibles extends Component {
  componentDidMount() {
    fakeDatabase(this.props.filtro).then(res => {
      console.log(res);
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.filtro !== this.props.filtro) {
      fakeDatabase(this.props.filtro).then(res => {
        console.log(res);
      });
    }
  }
  render() {
    return <Todos {...this.props} />;
  }
}

const RetornaElementosFiltrados = (state, { match }) => {
  let filtro = match.params.filtro || "all";
  return {
    elementosFiltrados: filtrarTodos(state, filtro), //? filtra por medio de los fitros especificados en la store los parametros necesarios son la store.Reducer y el filtro respectivamente
    filtro
  };
};

const RetornaFuncionOnClick = dispatch => ({
  func: id => {
    dispatch(toogleTodo({ id })); // ? cambia el tipo de completado a incompleto y viceversa
  }
});

TodosVisibles = withRouter(
  connect(
    RetornaElementosFiltrados,
    RetornaFuncionOnClick
  )(TodosVisibles)
);

export { TodosVisibles };
