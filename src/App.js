
import Header from './components/header/header';
import Formulario from './components/formulario/formulario.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/> {/* se puede renderizar tb como ----> {Header()} */}
      <Formulario/>
      
    </div>
  );
}

export default App;
