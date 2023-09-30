import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/header/header';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg/miOrg';
import Equipo from './components/equipo/equipo';

import './App.css';
import Footer from './components/footer/footer';

function App() {

  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false)

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "FrontEnd",
      foto: "https://github.com/noedenisel.png",
      nombre: "Noe Denise",
      puesto: "Dev"
  },
  { id: uuidv4(),
    equipo: "FrontEnd",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de Software e instructora"
  },
  { id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora"
  },
])

 const [equipos, setEquipos] = useState(
  // ? Lista de equipos
   [
  {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9" ,
      id: uuidv4()
    
  },
  {
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
      id: uuidv4() 
    
  },
  {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
      id: uuidv4() 
    
  },
  {

      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
      id: uuidv4() 
    
  },
  {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5" ,
      id: uuidv4()

  },
  {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9" ,
      id: uuidv4()
  
  },
  {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF" ,
      id: uuidv4()
  }
  
])



  const cambiarMostrar = ()=> {
    actualizarMostrarFormulario(!mostrarFormulario)
  }
  
  const registrarColaborador = (colaborador) =>{
    // console.log("nuevo colaborador:", colaborador);
    setColaboradores([...colaboradores, colaborador])
  } 


  const eliminarColaborador = (id) => {
    // console.log("Eliminar colaborador:", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    // console.log(nuevosColaboradores);
    setColaboradores(nuevosColaboradores)
  }

  //? Actualizar color de equipo
  const actualizarColor = (color, id) => {
    // console.log("actualizar: ", color,  id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }
 
 
  
  return (
    <div className="App">
      <Header/> {/* se puede renderizar tb como ----> {Header()} */}
      {
        // mostrarFormulario === true ? <Formulario/> : <></>
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.id )}
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
          /> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {/* <Equipo equipo="Programacion"/>
      <Equipo equipo="FrontEnd"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="Ux y Diseño"/>
      <Equipo equipo="Movil"/>
      <Equipo equipo="Innovación y Gestion"/> */}

      {
        equipos.map( (equipo) =>  <Equipo 
            datos = { equipo } 
            colaboradores = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo) }
            eliminarColaborador = { eliminarColaborador }
            actualizarColor = {actualizarColor}
          /> 
        )
      }

      <Footer/>
      

      
    </div>
  );
}

export default App;
