import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import { anagrafica } from './Dati/dati';
import Stampanumeri from './ESERCIZIO3/Stampanumeri';
import Tabellina from './ESERCIZIO2/Tabellina';
import Cleanup from './CleanUp';
import Form from './Form';
import CambiaNome from './CambiaNome';
import LoginForm from './loginform';

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

    <Stampanumeri></Stampanumeri>
    <Tabellina moltiplicatore="5"></Tabellina>

    <Cleanup></Cleanup>
    <Form></Form>
    <CambiaNome></CambiaNome>
    <LoginForm></LoginForm>

    {
          anagrafica.map((p)=>{
            return  <Componente1 key={p.id} {...p}/>

          })
        }


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
