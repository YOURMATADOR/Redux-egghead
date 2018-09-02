import React from "react";

import { AgregarTodo } from "./Agregar";
import { TodosVisibles } from "./Visibles";
import { Footer } from "./Footer";
// * agrega todos los componentes en un solo grupo para crear una app
const App = () => (
  <div>
    <h1>hola</h1>
    <AgregarTodo />
    <TodosVisibles />
    <Footer />
  </div>
);

export { App };

//** ? crea un elemento en la lista gracias a un maping que otorga las propiedades por cada vez que itinera en un objeto */
// let Todo = ({ id, texto, completado, funcion }) => (
//   <li
//     key={id}
//     onClick={funcion}
//     style={{ textDecoration: completado ? "line-through" : "none" }}
//   >
//     {texto}
//   </li>
// );

// let Todos = ({ elementosFiltrados, func }) => (
//   <ul>
//     {elementosFiltrados.map(i => (
//       <Todo key={i.id} {...i} funcion={() => func(i.id)} />
//     ))}
//   </ul>
// );
// const RetornaElementosFiltrados = state => ({
//   elementosFiltrados: filtrarTodos(state.Reducer, state.Filtrado)
// });

// const RetornaFuncionOnClick = dispatch => ({
//   func: id => {
//     dispatch(toogleTodo({ id }));
//   }
// });

// const TodosVisibles = connect(
//   RetornaElementosFiltrados,
//   RetornaFuncionOnClick
// )(Todos);
// class TodosVisibles extends Component {
//   componentDidMount = () => {
//     let { store } = this.props;
//     this.uns = store.subscribe(() => {
//       this.forceUpdate();
//     });
//   };
//   componentWillUnmount() {
//     this.uns();
//   }
//   render() {
//     let props = this.props;
//     const { store } = props;
//     let state = store.getState();
//     return (
//       <div>
//         <Todos
//           elementosFiltrados={filtrarTodos(state.Reducer, state.Filtrado)}
//           func={id => store.dispatch({ type: "TOOGLE-TODO", id })}
//         />
//       </div>
//     );
//   }
// }
// const Link = ({ activo, children, func }) => {
//   if (activo) {
//     return <span>{children}</span>;
//   }
//   return (
//     <a
//       href="#"
//       onClick={e => {
//         e.preventDefault();
//         func();
//       }}
//     >
//       {" "}
//       {children}
//     </a>
//   );
// };

// const RetornarEstadoActualVsEstadoSolicitado = (state, misProps) => {
//   return {
//     activo: misProps.filtro === state.Filtrado
//   };
// };

// const RetornaFuncion = (dispatch, misProps) => {
//   return {
//     func: () => {
//       dispatch(cambiarFiltro({ filtro: misProps.filtro }));
//     }
//   };
// };

// const Visibles = connect(
//   RetornarEstadoActualVsEstadoSolicitado,
//   RetornaFuncion
// )(Link);
// class Visibles extends Component {
//   componentDidMount = () => {
//     const { store } = this.props;
//     this.uns = store.subscribe(() => {
//       this.forceUpdate();
//     });
//   };
//   componentWillUnmount() {
//     this.uns();
//   }
//   render() {
//     const { store } = this.props;
//     return (
//       <Link
//         activo={this.props.filtro === store.getState().Filtrado}
//         func={() => {
//           store.dispatch({
//             type: "SET-VISIBILITY-FILTER",
//             filtro: this.props.filtro
//           });
//         }}
//       >
//         {this.props.children}
//       </Link>
//     );
//   }
// }

// let AgregarTodo = ({ onClick }) => {
//   let entrada;

//   return (
//     <div>
//       <input
//         type="text"
//         ref={e => {
//           entrada = e;
//         }}
//       />
//       <button
//         onClick={() => {
//           onClick(entrada.value);

//           // dispatch({
//           //   type: "ADD-TODO",
//           //   texto: entrada.value,
//           //   id: contador++
//           // });
//           entrada.value = "";
//         }}
//       >
//         imprimir estado
//       </button>
//     </div>
//   );
// };
// const mapDispatchToProps = dispatch => ({
//   onClick(texto) {
//     dispatch(agregarTodo({ id: v4(), texto }));
//   }
// });

// AgregarTodo = connect(
//   undefined,
//   mapDispatchToProps
// )(AgregarTodo);
// const filtrarTodos = (todos, filtro) => {
//   switch (filtro) {
//     case "SHOW-ALL":
//       return todos;
//       break;
//     case "SHOW-ACTIVE":
//       return todos.filter(e => e.completado);
//     case "SHOW-INACTIVE":
//       return todos.filter(e => !e.completado);
//     default:
//   }
// };
