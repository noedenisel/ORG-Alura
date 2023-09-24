import { useState } from 'react';

import Header from './components/header/header';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg/miOrg';
import Equipo from './components/equipo/equipo';

import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrarFormulario] = useState(false)

  const cambiarMostrar = ()=> {
    actualizarMostrarFormulario(!mostrarFormulario)
  }
  
  
  return (
    <div className="App">
      <Header/> {/* se puede renderizar tb como ----> {Header()} */}
      {
        // mostrarFormulario === true ? <Formulario/> : <></>
        mostrarFormulario && <Formulario/> 
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programacion"/>
      <Equipo equipo="FrontEnd"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="Ux y Diseño"/>
      <Equipo equipo="Movil"/>
      <Equipo equipo="Innovación y Gestion"/>
      

      
    </div>
  );
}

export default App;
