import React, { useState } from 'react'

const Form = () => {

    const[nome,setNome] = useState("");
    const[cognome,setCognome] = useState("");


    const GestioneDati=(e)=>{
        e.preventDefault();        
    }

 

return (
    <div className="container">
      <form className="row g-3" onSubmit={GestioneDati}>
        <div className="col-md-6 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            name = "nome"
            id = "nome"
            value={nome}
            aria-describedby="emailHelp"
            onChange={(e)=>{setNome(e.target.value)}}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Cognome
          </label>
          <input
            type="text"
            name = "cognome"
            value = {cognome}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{setCognome(e.target.value)}}

          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form