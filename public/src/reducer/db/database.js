import uuidv4 from "uuid/v4";

let reducers = {
  todos: [
    {
      id: uuidv4(),
      texto: "Eduardo",
      completado: false
    },
    {
      id: uuidv4(),
      texto: "Lalo",
      completado: false
    },
    {
      id: uuidv4(),
      texto: "Pepe",
      completado: false
    }
  ]
};

let espera = tiempo => new Promise(resolve => setTimeout(resolve, tiempo));

export const fakeDatabase = filtro =>
  espera(500).then(() => {
    switch (filtro) {
      case "all":
        return reducers.todos;
      case "active":
        return reducers.todos.filter(e => e.completado);
      case "inactive":
        return reducers.todos.filter(e => !e.completado);
      default:
        throw new Error(`El filtro ${filtro} no se reconoce`);
    }
  });
