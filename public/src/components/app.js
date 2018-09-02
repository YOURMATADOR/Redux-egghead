import React from "react";
import { App } from "./todos";
import { Provider } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

// import pathRx from "path-to-regexp";

export let historial = createBrowserHistory();
// let filtros = pathRx("/:filtro");
export default ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={historial}>
        <Switch>
          <Route path="/:filtro" component={App} />
          <Route exact path="/hola" render={() => <h1>Hola</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
};

// * agrega la store a la cual se le estaran realizando los cambios o de la
// cual se obtendra la informacion
//* este componente y sus hijos son los
// que tendra acceso a la store
