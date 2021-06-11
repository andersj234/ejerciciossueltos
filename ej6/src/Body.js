function Body(props){

    function Tarjeta(props) {
        return (
            <main key={props.index}>
                <h1>{props.titulo}</h1>
                <h2>{props.autor}</h2>
                <p>{props.descripcion}</p>
                <img src={props.img} alt={props.img}></img>
                <p>{props.stock}</p>
            </main>
        )
      }

    const catalogo = props.libreria.libros.map((libro, index) => {
        return( 
            <Tarjeta
          index={index}
          titulo={libro.titulo}
          autor={libro.altura}
          descripcion={libro.descripcion}
          img={libro.img}
          stock={libro.stock}
        ></Tarjeta>
        )
      });
return(<div id="libros">
    {catalogo}
</div>)
}

export default Body