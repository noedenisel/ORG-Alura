import CampoTexto from "../campo text/campotext.js"
import ListaOpciones from "../listaOpciones/index.js"
import "./formulario.css" 

const Formulario = () => {
    return <section className="formulario">
        <form >
            <h2> Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo= "Nombre" placeholder ="Ingresa un nombre"/>  
            <CampoTexto titulo= "Puesto" placeholder ="Ingresa un puesto"/> 
            <CampoTexto titulo= "Foto" placeholder ="Ingresa enlace de foto"/>   
            <ListaOpciones/>    
        </form>
    </section>
}

export default Formulario