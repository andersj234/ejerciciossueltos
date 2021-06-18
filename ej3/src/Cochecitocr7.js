function Cochecitocr7(props){
    function Tarjeta(props) {
        return (
            <div key={props.index}>
                <p>{props.ruedas}</p>
                <p>{props.altura}</p>
                <p>{props.longitud}</p>
                <p>{props.color}</p>
            </div>
        )
      }
      
  const catalogo = props.coches.cochecito.map((coche, index) => {
    return( 
        <Tarjeta
      index={index}
      ruedas={coche.ruedas}
      altura={coche.altura}
      longidud={coche.longitud}
      color={coche.color}
    />
    )
  });

  return (
  <div id="coches">{catalogo}</div>
  );
}

export default Cochecitocr7