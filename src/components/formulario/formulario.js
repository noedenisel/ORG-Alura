import CampoTexto from "../campo text/campotext.js"
import ListaOpciones from "../listaOpciones/index.js"
import Boton
 from "../boton/boton.js"
import "./formulario.css" 

const Formulario = () => {

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejo de envio de form", event);
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo= "Nombre" placeholder ="Ingresa un nombre"/>  
            <CampoTexto titulo= "Puesto" placeholder ="Ingresa un puesto"/> 
            <CampoTexto titulo= "Foto" placeholder ="Ingresa enlace de foto"/>   
            <ListaOpciones/>    
            <Boton texto = "Crear colaborador"/>
        </form>
    </section>
}

export default Formulario