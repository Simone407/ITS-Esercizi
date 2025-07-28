

// creare interfaccia che permette di scegliere un utente, che filtra gli albums e tramite selezione di questi ultimi appaiono le foto
// valorizzare la select con gli users

import { useEffect, useState } from "react";



const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlAlbums = "https://jsonplaceholder.typicode.com/albums";
const urlPhotos = "https://jsonplaceholder.typicode.com/photos";


const UserAlbums = () => {
    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(0);

    const getUsers= async()=>{  

        try {


        
        const response = await fetch(urlUsers);
        const result  = await response.json();
        setUsers(result);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getUsers();
    },[])
  
    return (
      <div className="container">
        <h1>Gestione albums photos</h1>
        <div className="row">
          <div className="col-6">
            <select className="form-select" 
            value={userSelected}
            onChange={(e) =>setUserSelected(e.target.value)}>
                
            <option value="0">Seleziona utente</option>
            {users.map((u)=>{
                return (
                    <option key={u.id} value={u.id}>
                        {u.name}
                </option>);
                })}
            </select>
          </div>
          <div className="col-6">
            <select className="form-select">
                <option value="0">Seleziona l'album</option>
            </select>
         </div>
        </div>
        <div className="row">
          <div className="col-12"></div>
        </div>
      </div>
    );
  };
  
  export default UserAlbums;