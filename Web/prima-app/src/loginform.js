import React, {useState} from "react";


const LoginForm =  (()=>{

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[message,Setmessage]= useState("");

    const GestioneDati=(e)=>{
        e.preventDefault();  
        Setmessage(email + password)      
    }

  
    

return (
    <div className="container">
        <h3>{message}</h3>
      <form className="row g-3" onSubmit={GestioneDati}>
        <div className="col-md-6 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name = "email"
            id = "email"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password  "
            name = "password"
            value = {password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        <button onClick={()=>alert('login effettuato'+ '\n' + 'email:'+ email + '\n' + 'password: '+ password)} type="submit">Login</button>

        {/* <h1>'Email {email} Password: {password}</h1> */}



      </form>
    </div>
  )
}
)


export default LoginForm