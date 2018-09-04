let suscribir = nombre => {
  console.log(nombre, " Se acaba de subsribir");

  return edad => {
    console.log(`${nombre} con al edad de ${edad} se desuscribio`);
  };
};

// const estados = nombre => {
//   let subs = suscribir;
//   return edad => {
//     console.group("suscribir");
//     let suscripcion = subs(nombre);
//     console.log("Suscrito");
//     console.groupEnd("-------");
//     return suscripcion(edad);
//   };
// };

let n  = suscribir;

n

// suscribirme("Eduardo")(20);
