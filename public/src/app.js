import React, { Component } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import "typeface-roboto";
import Icon from "@material-ui/core/Icon";

import { configureStore } from "./reducer/store";
import Root from "./components/app";
// import { fakeDatabase } from "./reducer/db/database";

// fakeDatabase("all")
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });
const store = configureStore();
// render(<Root store={store} />, document.getElementById("app"));

let misProductos = [
  {
    id: 1,
    nombre: "Coca-cola",
    precio: 10,
    disponible: true
  },
  {
    id: 2,
    nombre: "Papitas",
    precio: 15,
    disponible: true
  },
  {
    id: 3,
    nombre: "Chocolate",
    precio: 20,
    disponible: true
  }
];

const filtro = (productos, nombre) => {
  return nombre
    ? productos.filter(i => i.nombre.toLowerCase().includes(nombre))
    : productos;
};
class Practica extends Component {
  state = { productos: misProductos, busqueda: "" };

  cambiarFiltro = e => {
    let busqueda = e.target.value;
    this.setState({
      busqueda,
      productos: busqueda
        ? filtro(this.state.productos, busqueda)
        : misProductos
    });
  };
  cambiarDisponibilidad = id => {
    console.log("click", id);
    this.setState(pasado => ({
      productos: pasado.productos.map(
        i => (i.id === id ? { ...i, disponible: !i.disponible } : { ...i })
      )
    }));
  };
  render() {
    return (
      <div>
        <Busqueda func={this.cambiarFiltro} valor={this.state.busqueda} />
        <Productos
          productos={this.state.productos}
          func={this.cambiarDisponibilidad}
        />
      </div>
    );
  }
}
const Busqueda = ({ func, valor }) => (
  <div>
    <input
      type="text"
      value={valor}
      placeholder="Buscar productos"
      onChange={e => func(e)}
    />
    <Button variant="contained" color="primary">
      <Icon>search</Icon>
    </Button>
  </div>
);
const Productos = ({ productos, func }) => (
  <div>
    <ul>
      {productos ? (
        productos.map((i, e) => <Producto key={e} {...i} func={func} />)
      ) : (
        <h1>No hay productos disponibles</h1>
      )}
    </ul>
    <Producto />
  </div>
);
const Producto = ({ nombre, precio, disponible, func, id }) => (
  <div>
    <table>
      <thead>
        <tr
          style={{ color: disponible ? "black" : "red" }}
          onClick={() => func(id)}
        >
          <th>{nombre}</th>
          <th>{precio}</th>
        </tr>
      </thead>
    </table>
  </div>
);

render(<Practica />, document.getElementById("app"));
