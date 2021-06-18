import libreria from "./libreria"
import './App.css';
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import {useState} from"react"
function App() {
  /* let random = Math.floor(Math.random() * 2) */
  let [esVip, setesVip] = useState(libreria.usuario.vip)

  function setEstado(){
    setesVip(!esVip)
  }
  return (
   <>
    <Header libreria={libreria} esVip={esVip} setEstado={setEstado}/>
     <Body libreria={libreria}/>

    {/* <Footer libro={libreria.libros[random]}></Footer> */}  
   </>
  );
}

export default App;
