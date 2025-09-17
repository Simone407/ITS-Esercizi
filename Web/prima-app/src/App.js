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
import Saluto from './EserciziAGOSTO/es1/Saluto';
import CardUtente from './EserciziAGOSTO/es2/CardUtente';
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
      <Saluto></Saluto>
      

<div class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col">
    <CardUtente 
        nome="Mario Rossi" 
        email="mario.rossi@email.com" 
        imgUrl="https://placehold.co/250x150" 
      />
    <CardUtente 
        nome="Luca Bianchi" 
        email="luca.bianchi@email.com" 
        imgUrl="https://placehold.co/250x150" 
      />
    </div>
    <div class="col"></div>
  </div>
</div>




      <Stampanumeri></Stampanumeri>
      <Tabellina moltiplicatore="5"></Tabellina>
      <Cleanup></Cleanup>
      <Form></Form>
      <CambiaNome></CambiaNome>
      <LoginForm></LoginForm>
      

      {
        anagrafica.map((p) => {
          return <Componente1 key={p.id} {...p} />

        })
      }


      <img src={logo} className="App-logo" alt="logo" />

      <h2>
        {

          new Date().toLocaleDateString() + "" + new Date().toLocaleTimeString()

        }
      </h2>
      <Clock timezone="1" country="ITALY"></Clock>
      <Clock timezone="4" country="USA"></Clock>
      <Clock timezone="8" country="JAPAN"></Clock>
    </div>

  );
}

export default App;
