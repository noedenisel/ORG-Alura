import logo from './logo.svg';
import Header from './components/header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/> {/* {Header()} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
