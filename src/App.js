import { useState } from 'react';

import Header from './components/header/header';
import Formulario from './components/formulario/formulario.js';
import MiOrg from './components/MiOrg/miOrg';

import './App.css';

function App() {

  const [mostrarFormulario, actualizarMostrarFormulario] = useState(true)

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
      
    </div>
  );
}

export default App;
