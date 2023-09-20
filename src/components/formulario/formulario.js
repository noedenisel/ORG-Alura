import { useState } from "react"

import CampoTexto from "../campo text/campotext.js"
import ListaOpciones from "../listaOpciones/index.js"
import Boton
 from "../boton/boton.js"
import "./formulario.css" 

const Formulario = () => {

    const [nombre, setNombre] = useState ("")
    const [puesto, setPuesto] =useState("")
    const [foto, setFoto] = useState("")


    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejo de envio de form", event);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto
        }
        console.log("Datos a enviar;",datosAEnviar);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo= "Nombre" 
                placeholder = "Ingresa un nombre" 
                valor={nombre} 
                actualizarValor={setNombre}
                required 
            />  
            <CampoTexto 
                titulo= "Puesto" 
                placeholder ="Ingresa un puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            /> 
            <CampoTexto 
                titulo= "Foto" 
                placeholder ="Ingresa enlace de foto" 
                required valor={foto} 
                actualizarValor={setFoto}
                />   
            <ListaOpciones/>    
            <Boton> Crear </Boton>
        </form>
    </section>
}

export default Formulario