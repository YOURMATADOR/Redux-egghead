
const convertirC = input => ((input - 32) * 5) / 9;

const convertirF = input => (input * 9) / 5 + 32;

const convertir = (temperatura, conversion) => {
  const input = parseFloat(temperatura);
  if (Number.isNaN(input)) {
    return "";
  }
  const salida = conversion(input);
  let rounded = Math.round(salida * 1000) / 1000;
  return rounded.toString();
};

const tipos = {
  c: "Celsius",
  f: "fahrenheid"
};

const TemperaturaEntrada = ({ tipo, temperatura, func }) => (
  <fieldset>
    <legend>{tipos[tipo]}</legend>
    <input value={temperatura} onChange={e => func(e.target.value)} />
  </fieldset>
);
class Practica extends Component {
  state = { temperatura: "", tipo: "c" };
  CambiarTemperaturaC = temperatura => {
    this.setState({ tipo: "c", temperatura });
  };
  CambiarTemperaturaF = temperatura => {
    this.setState({ tipo: "f", temperatura });
  };
  render() {
    let scala = this.state.tipo;
    let temperatura = this.state.temperatura;
    let cel = scala === "f" ? convertir(temperatura, convertirC) : temperatura;
    let far = scala === "c" ? convertir(temperatura, convertirF) : temperatura;
    return (
      <div>
        <TemperaturaEntrada
          tipo="c"
          temperatura={cel}
          func={this.CambiarTemperaturaC}
        />
        <TemperaturaEntrada
          tipo="f"
          temperatura={far}
          func={this.CambiarTemperaturaF}
        />
      </div>
    );
  }
}