import React, {useState} from 'react';
import './App.css';
import personas from "./personas"


function App() {

  let [contador , setContador] = useState(0);

  function next(){
    if(contador < 2){
      setContador(contador +1)
    }else{
      setContador(0)
    }
  }

  if (contador === 0){
    return (
      <>
        <h1>{personas[0]}</h1> 
        <button onClick={next}>click</button>
  
      </>
  
    );
  }else if(contador ===1){
    return (
      <>
        <h1>{personas[1]}</h1> 
        <button onClick={next}>click</button>
  
      </>
  
    );
  }else{
    return (
      <>
        <h1>{personas[2]}</h1> 
        <button onClick={next}>click</button>
  
      </>
  
    );
  }
  
  
}

export default App;
