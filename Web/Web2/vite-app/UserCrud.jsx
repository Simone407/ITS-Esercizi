import React from 'react'
import { useEffect, useState } from "react";
// leggere gli utenti da localhost : 3000. creare vista con pulsanti update e delete. al click di delete cancellare utente
// creare form di imnserimento per inserimentio utente
// al click di update popola il fporm di inserimento e al click di salva fa update dell utente 

const urlUser = "https://jsonplaceholder.typicode.com/users";
const UserCrud = () => {
const [users, setUsers] = useState([]);
const [formData,setFormData]= useState({
    id:null,
    nome:"",
    cognome:"",
    telefono:"",
    email:""
})


  const getUsers = () => {
    fetch(urlUser)
      .then((response) => response.json())
      .then((ris) => setUsers(ris));
  };
  useEffect(() => {
    getUsers();
  }, []);


  const handlerInput = (e) =>{

    const [value,name] = e.target;
    setFormData(prev=>({
        ...prev,
        [name]:value
    }))
  }


  const deleteUser = (id) => {
    const newUsers = users.filter((u) => u.id !== id);
    if (window.confirm("Sei sicuro di voler cancellare questo utente?")) {
      setUsers(newUsers);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Gestione Utenti</h1>
        <div class="mb-3 row">
        <div className="card shado-sm mb-4">
          <div className="card-body">
             <h2 className="card-title mb-4">Gestione utente</h2>
             <form >
         
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="nome" className="form-label fw-bold">Nome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cognome" className="form-label fw-bold">Cognome *</label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                className="form-control"
                
                required
              />
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="telefono" className="form-label fw-bold">Telefono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="form-control"
                
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
               
                required
              />
            </div>
          </div>
          
      
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
            Salva dati
            </button>
            
           
          </div>
        </form>
          </div>
        </div>

          </div>
        </div>


        <div className="row">
          <div className="col-8 p-2 d-flex justify-content-start bg-secondary text-white">
            Utente
          </div>
          <div className="col-4 p-2 d-flex justify-content-end bg-secondary text-white">
            Azioni
          </div>
        </div>
        <div>
          {users.map((u) => {
            return (
              <div className="row my-1 border">
                <div className="col-8 p-2 d-flex justify-content-start">
                  {u.name}
                </div>
                <div className="col-4 p-2 d-flex justify-content-end gap-2">
                  <button className="btn btn-primary">Update</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(u.id);
                    }}>Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};


export default UserCrud;
