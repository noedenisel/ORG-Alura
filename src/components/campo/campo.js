import { useState } from "react"

import "./campo.css"

const Campo = (props) => {
    const [valor, setValor]  = useState("")
    // console.log("Datos:", props);

    const placeholderModificado = `${props.placeholder}...`

    const { type = "text" } = props
    
    // console.log(props.type);

    const manejarCambio = (e) => {
        // console.log("Cambio:", e.target.value);
        props.actualizarValor(e.target.value)
    }


    return <div className={`campo campo-${type}}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
            required ={props.required}
            value = {props.valor}
            onChange={manejarCambio}
            type = { type }
        />
    </div>
}

export default Campo