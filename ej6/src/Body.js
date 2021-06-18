import { useState } from "react"
function Body(props) {
  
  const catalogo = props.libreria.libros.map((libro, index) => {
    return (
      <Tarjeta
        key={libro.id}
        index={index}
        titulo={libro.titulo}
        autor={libro.altura}
        descripcion={libro.descripcion}
        img={libro.img}
        stock={libro.stock}
      />
    );
  });
  return <div key="catalogo" id="libros">{catalogo}</div>;
}

function Tarjeta(props) {
  let [stock, setStock] = useState(props.stock)
  let string= "stock: "
  function manejarStock() {
    setStock(stock-1)
    console.log(stock)
  }
  function hayStock() {
    if(stock > 0 ){
      return(<p>{string} {stock}</p>)
    }else{
      return(<p>no quedan copias</p>)
    }
  }
  return (
    <div>
      <div className="card" >
        <img src={props.img} alt={props.img}/>  
        <h1>{props.titulo}</h1>
        <h2>{props.autor}</h2>
        <p>{props.descripcion}</p>
        {hayStock()}
        <button onClick={manejarStock}>comprar</button>
      </div>
    </div>
  );
}
export default Body;
