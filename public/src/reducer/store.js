import { createStore, combineReducers } from "redux";

import TODOS from "./reducers/todos";
import FILTRO from "./reducers/filtrado";

const ReducerApp = combineReducers({ TODOS, FILTRO });

export default createStore(ReducerApp);
