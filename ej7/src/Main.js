import { useState } from "react";

function Main(props) {
  function Barco(props) {
    let [tripulacion, setTripulacion] = useState(props.tripulantes); //le damos un valor
    return (
      <div key={props.index} className="card">
        <h1>{props.nombre}</h1>
        <h2>{props.eslora}</h2>
        <p>Tripulantes: {tripulacion}</p>
        <p>{tripulacion}</p>{/* /si no le pongo texto me deja hacerlo perfectamente pero si pongo me da fallos */} {/* es cosa del traductor */}
        <button
          onClick={() => {
            setTripulacion(tripulacion + 1); //añadimos un tripulante a los que ya existen
          }}
        >
          Embarcar
        </button>
      </div>
    );
  }

  const mostrarBarcos = props.barcos.map((barco, index) => {
    return (
      <Barco
        index={index} //aqui se le envia toda la informacion que queremos usar del map en otros sitios
        nombre={barco.nombre}
        eslora={barco.eslora}
        tripulantes={barco.tripulantes}
      />
    );
  });

  return mostrarBarcos;
}

export default Main;
