import React, {useState, useRef} from 'react'
/* Dato un form di inserimento di un utente e una  targa. 
Implementare 
un sistema che inserisca gli utenti e li visualizzi in una tabella. se la targa è già stata inserita non è possibile inserirla nuovamente*/
const Targa = () => {
  
  const propietarioRef = useRef(null)
  const targaRef = useRef(null)
  
  const[officina, setOfficina] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const propietario = propietarioRef.current.value 
    const targa = targaRef.current.value

    if(propietario && targa){
      const checkTarga = officina.some(i => i.targa === targa)

      if(checkTarga){
        alert("Non possono esserci più targhe uguali!")
        return 
      }
      setOfficina([
        ...officina, 
        {propietario, targa}
      ])

      propietarioRef.current.value = ""
      targaRef.current.value= ""
    
    }else{
      console.log("compilare nome e cognome")
    }

    console.log("submit form")
  }

    
  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputPropietario" className="form-label">Propietario</label>
          <input type="text" className="form-control" id="inputPropietario" ref={propietarioRef} name='propietario' />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputTarga" className="formlabel">Targa</label>
          <input type="text" className="form-control" id="inputTarga" ref={targaRef} name='Targa' />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Invia</button>
        </div>
      </form>

      {officina && 
        <table>
          <thead>
            <tr>
              <th>Propietario</th>
              <th>Targa</th>
            </tr>
          </thead>

          <tbody>
            {officina.map((o) => (
              <tr key={o.targa}>
                <td>{o.propietario}</td>
                <td>{o.targa}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      }

    </div>
  )
}

export default Targa