import Store from "./reducer/store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "./components/todos";

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
