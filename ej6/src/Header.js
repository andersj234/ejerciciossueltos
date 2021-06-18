
 
function Header(props){

    return(
    <div id="header" key={props.libreria.usuario.nombre}>
        <h3>{ props.esVip? `hola ${props.libreria.usuario.nombre}`  : props.libreria.usuario.nombre}</h3>
        <img src={props.libreria.usuario.imagen} alt={props.libreria.usuario.nombre}></img>
        <button onClick={function(){
            props.setEstado()
        }}>cambiar estatus</button> {/* me esta dando fallos el onclick sin sentido */}
    </div>
        )
    
}

export default Header