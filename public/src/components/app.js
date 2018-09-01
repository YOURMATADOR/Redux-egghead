import React from "react";
import { App } from "./todos";
import { Provider } from "react-redux";

export default ({ store }) => (
  <Provider store={store}> // * agrega la store a la cual se le estaran realizando los cambios o de la cual se obtendra la informacion
    <App /> //* este componente y sus hijos son los que tendra acceso a la store
  </Provider>
);
