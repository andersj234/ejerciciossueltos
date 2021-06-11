import libreria from "./libreria"
import './App.css';
import Header from "./Header"
import {useState} from "react"
import Body from "./Body"
//import Footer from "./Footer"
function App() {
  return (
   <>
    <Header libreria={libreria}></Header>
     <Body libreria={libreria}></Body>
    {/* <Footer libreria={libreria}></Footer> */} 
   </>
  );
}

export default App;
