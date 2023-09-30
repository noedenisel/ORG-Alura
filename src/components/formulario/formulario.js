import { useState } from "react"

import Campo from "../campo/campo.js"
import ListaOpciones from "../listaOpciones/index.js"
import Boton
 from "../boton/boton.js"
import "./formulario.css" 

const Formulario = (props) => {

    const [nombre, setNombre] = useState ("")
    const [puesto, setPuesto] =useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const {registrarColaborador, crearEquipo} = props


    const manejarEnvio = (event) => {
        event.preventDefault()
        // console.log("Manejo de envio de form", event);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault()
        console.log("Manejo de envio de nuevo equipo", event);
        let datosNuevoEquipo = {
                titulo,
                colorPrimario: color
        }
        console.log("Datos a enviar;",datosNuevoEquipo);
        crearEquipo(datosNuevoEquipo)
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador</h2>
            <Campo
                titulo= "Nombre" 
                placeholder = "Ingresa un nombre" 
                valor={nombre} 
                actualizarValor={setNombre}
                required 
            />  
            <Campo
                titulo= "Puesto" 
                placeholder ="Ingresa un puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            /> 
            <Campo
                titulo= "Foto" 
                placeholder ="Ingresa enlace de foto" 
                required valor={foto} 
                actualizarValor={setFoto}
                />   
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={setEquipo}
                equipos = {props.equipos}/>    
            <Boton>Crear </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena el formulario para crear el equipo</h2>
            <Campo
                titulo= "Titulo" 
                placeholder = "Ingresa Titulo" 
                valor={titulo} 
                actualizarValor={setTitulo}
                required 
            />  
            <Campo
                color= "Color" 
                placeholder ="Ingresar el color en hex" 
                required 
                valor={color} 
                actualizarValor={setColor}
                type= "color"
            /> 
                <Boton>Registrar equipo </Boton>
                </form>
    </section>
}

export default Formulario