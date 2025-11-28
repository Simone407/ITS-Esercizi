import React from 'react'

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);




const App = () => {
    return (
    <>
        <h1 className='h1green' onClick={(e) => console.log(e)}>Ciao sono un H1</h1>       
        
    </> 
  )
}

root.render(<App></App>)






const Tabella = () =>{

    return(

        <>
        
        
        </>


    )
}






const h1 = React.createElement(
         "h1",
         { 
           key:"h1",
           style: {
             color: "green",
           },
           onClick: (e) => console.log(e),
         },
         "Ciao sono un H1"
       );