import { createStore, combineReducers } from "redux";
import throttle from "lodash/throttle";

import Reducer from "./reducers/todos";
import Filtrado from "./reducers/filtrado";
import { getTodos } from "./persistense/localS";
import { saveTodos } from "./persistense/localS";

const mostrarCambios = store => {
  let ejecutarDispatch = store.dispatch;
  if (!console.group) {
    return ejecutarDispatch;
  }
  return accion => {
    console.group(accion.type);
    console.log("prev S", store.getState());
    let llamado = ejecutarDispatch(accion);
    console.log("aff S", store.getState());
    console.groupEnd(accion.type);
    return llamado;
  };
};

const ReducerApp = combineReducers({ Reducer, Filtrado });
export const configureStore = () => {
  let todos = getTodos();
  let Store = createStore(ReducerApp, todos);
  if (!process.env.produccion) {
    Store.dispatch = mostrarCambios(Store);
  }
  Store.subscribe(
    throttle(() => {
      saveTodos({
        Reducer: Store.getState().Reducer
      });
    }),
    1000
  );
  return Store;
};
