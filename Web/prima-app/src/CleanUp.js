import React, { useEffect, useState } from "react";


const Cleanup = () => {
    console.log(window)
    const [size,setSize] = useState(window.innerWidth)


    const dimensione = () =>{

        setSize(window.innerWidth)

    }

    useEffect(()=>{

        window.addEventListener("resize",dimensione)

        return(()=>{

            window.removeEventListener("resize",dimensione)
        })

    })
    return(

    <h1>{size}</h1>
)

}


export default Cleanup