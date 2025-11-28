import React, {useState} from "react";


const CambiaNome = () => {
    const[nome,setNome] = useState("Marco");

        const cambia=(()=>{
    
        if (nome == "Marco"){

            setNome("Alessio")
        }else{
            setNome("MArco")
        }
    })

    return (
    

        <div>
            {nome}
        </div>
            


    )
}

export default CambiaNome;