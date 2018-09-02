import React from "react";
import { render } from "react-dom";
import {configureStore} from './reducer/store';
import Root from './components/app';

const store =configureStore();
render(
  <Root store={store}/>,
  document.getElementById("app")
);
