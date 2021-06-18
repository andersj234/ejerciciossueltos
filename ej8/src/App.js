
import './App.css';
import {useState} from "react"
function App() {
  let [simbolo, setSimbolo]= useState("O")
  let [cuadrados, setCuadrados]= useState([null, null,null,null, null,null,null, null,null]) // todos los botonos iniciaran en null en este caso no tendran nada dentro de ellos

  function cambiarSimbolo() { // es una funcion que nos cambiara el state de la O en cada turno
    if (simbolo === "O"){
      setSimbolo("X")
    }else{
      setSimbolo("O")
    }
  }

  function pintarBotones(i) { //le pasamos el indice donde ocurren los cambios del array
    return (
      <button onClick={()=>{ 
        const array=[...cuadrados] //copia cuadrados
        if(array[i]=== null){ //comprueba si esta null y si lo esta cambia la posicion de null a X u O dependiendo del turno en el que se este
          array[i] = simbolo //el botton que contiene ese null pasa a uno de los dos valores en función del turno
          cambiarSimbolo(
            setCuadrados(array) //llamamos a set cuadrados y que actualice el array con los nuevos valores
          )
        }
      }}>{cuadrados[i]}</button>//mostramos el valor que tiene ahora el boton
    )
  }

  const comprobarGanador = () => {
    //Horizontales
    if (cuadrados[0] === cuadrados[1] && cuadrados[1] === cuadrados[2]) {
      return cuadrados[0];
    } else if (cuadrados[3] === cuadrados[4] && cuadrados[4] === cuadrados[5]) {
      console.log(cuadrados[3]);
      return cuadrados[3];
    } else if (cuadrados[6] === cuadrados[7] && cuadrados[7] === cuadrados[8]) {
      console.log(cuadrados[6]);
      return cuadrados[6];
      // Verticales
    } else if (cuadrados[0] === cuadrados[3] && cuadrados[3] === cuadrados[6]) {
      console.log(cuadrados[0]);
      return cuadrados[0];
    } else if (cuadrados[1] === cuadrados[4] && cuadrados[4] === cuadrados[7]) {
      console.log(cuadrados[1]);
      return cuadrados[1];
    } else if (cuadrados[2] === cuadrados[5] && cuadrados[5] === cuadrados[8]) {
      console.log(cuadrados[2]);
      return cuadrados[2];
      //Diagonales
    } else if (cuadrados[0] === cuadrados[4] && cuadrados[4] === cuadrados[8]) {
      console.log(cuadrados[0]);
      return cuadrados[0];
    } else if (cuadrados[2] === cuadrados[4] && cuadrados[4] === cuadrados[6]) {
      console.log(cuadrados[2]);
      return cuadrados[2]; // se hace una cadena de if y else if para comprobar si los simbolos coinciden con las X o las O y si alguna linea coincide con X o con O da un ganador si nodevuelve un string vacio por lo que  en el parrafo de ganador quedaria vacio
    } else {
      return "";
    }
  };
  let ganador = comprobarGanador();

  return(
    <>
    <div>
      {pintarBotones(0)}
      {pintarBotones(1)}
      {pintarBotones(2)}
    </div>
    <div>
      {pintarBotones(3)}
      {pintarBotones(4)}
      {pintarBotones(5)}
    </div>
    <div>
      {pintarBotones(6)}
      {pintarBotones(7)}
      {pintarBotones(8)}
    </div>
    <p>ganador: {ganador}</p>
    </>
  )
}

export default App;

