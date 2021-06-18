//ej1

/* function Eventos(props){
    return(
       
        <div>
            <h1>{props.evento.nombre}</h1>
            <p>{props.evento.fecha}</p>
            <p>{props.evento.hora}</p>
            <p>{props.evento.lugar.direccion}</p>
            <p>{props.evento.lugar.ciudad}</p> 
        </div>
    )
} */



//ej2     
// por no descargar todo el rato he comentado esto 

function Eventos(){

    function Algo(){
        let patata =["zanahoria", " plata", "plomo"]

        return (
            <div>
                <ul>
                    <li>{patata[0]}</li>
                    <li>{patata[1]}</li>
                    <li>{patata[2]}</li>
                </ul>
            </div>
        )
    }
   
     return <Algo/>
}


export default Eventos