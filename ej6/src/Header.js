function Header(props){
    
    function cambiar(props){
        if(props.libreria.usuario.vip === false){
            return(props.libreria.usuario.vip=true)
        }else{
            return(props.libreria.usuario.vip=false)
        }
    }

    if(props.libreria.usuario.vip === true){
        return(
        <div>
            <p>{props.libreria.usuario.nombre}</p>
            <p>el cliente es vip</p>
            <p><img src={props.libreria.usuario.imagen} alt={props.libreria.usuario.imagen}></img></p>
            <button onClick={cambiar}>convertir en vip</button>
        </div>
    )}else{
        return(
            <div>
            <p>{props.libreria.usuario.nombre}</p>
            <p>el cliente no es vip</p>
            <button onClick={cambiar}>convertir en vip</button>
            <p><img src={props.libreria.usuario.imagen} alt={props.libreria.usuario.imagen}></img></p>
        </div>
        )
        
    }
}

export default Header