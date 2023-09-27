import { useState } from 'react';

import Header from './components/header/header';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg/miOrg';
import Equipo from './components/equipo/equipo';

import './App.css';
import Footer from './components/footer/footer';

function App() {

  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false)

  const [colaboradores, setColaboradores] = useState([])

  const cambiarMostrar = ()=> {
    actualizarMostrarFormulario(!mostrarFormulario)
  }
  
  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador:", colaborador);
    setColaboradores([...colaboradores, colaborador])
  } 

  // ? Lista de equipos
  
  const equipos = [
    {
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9" 
      
    },
    {
        titulo: "FrontEnd",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF" 
      
    },
    {
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2" 
      
    },
    {

        titulo: "DevOps",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8" 
      
    },
    {
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5" 

    },
    {
        titulo: "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9" 
    
    },
    {
        titulo: "Innovacion y Gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF" 
    }
    
]
  
  return (
    <div className="App">
      <Header/> {/* se puede renderizar tb como ----> {Header()} */}
      {
        // mostrarFormulario === true ? <Formulario/> : <></>
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.titulo )}ç
          registrarColaborador = {registrarColaborador}
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
            key = { equipo.titulo }
            colaboradores = { colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo) }
          /> 
        )
      }

      <Footer/>
      

      
    </div>
  );
}

export default App;
