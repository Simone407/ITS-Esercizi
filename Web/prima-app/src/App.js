import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';

/*

function getDate(date){
  return date.toLocaleDateString()+ "" + date.toLocaleTimeString()
}

*/

function App() {
  let nome = "simone";
  return (
    <div className="App">

    <h1>Prima app React {nome}</h1> 

    <Componente1> Pippo</Componente1>

    <img src={logo} className="App-logo" alt="logo" />
    
    <h2>
    {

      new Date().toLocaleDateString()+ "" + new Date().toLocaleTimeString()

    }
    </h2>
    <Clock timezone="1" country="ITALY"></Clock>
    <Clock timezone="4" country="USA"></Clock>
    <Clock timezone="8" country="JAPAN"></Clock>
    </div>

  );
}

export default App;
