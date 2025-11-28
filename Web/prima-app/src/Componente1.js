import React from 'react'

const Componente1 = (props) => {
  console.log(props)
 const divStyle={
  color:"red",
  border:"1px #000 solid",
  backgroundColor:"yellow",
  margin:"10px",
  padding:"25px",
  fontWeight:"600"
  
 }



return (
  <div style={divStyle}>
  Io sono {props.nome} {props.cognome} 
    <Anagrafica></Anagrafica>
    <Messaggio></Messaggio>
    </div>
)
}


export const Anagrafica=()=>{
return (<div>Anagrafica</div>)
}

export const Messaggio=()=>{
return (<div>Messaggio</div>)
}
export default Componente1
