import { createStore, combineReducers } from "redux";
import throttle from "lodash/throttle";

import Reducer from "./reducers/todos";
import Filtrado from "./reducers/filtrado";
import { getTodos } from "./persistense/localS";
import { saveTodos } from "./persistense/localS";

const ReducerApp = combineReducers({ Reducer, Filtrado });
export const configureStore = () => {
  let todos = getTodos();
  let Store = createStore(ReducerApp, todos);
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
