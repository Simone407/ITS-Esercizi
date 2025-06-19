// importare sempre rafce
import React from 'react'




const Stampanumeri = () => {

    const num = [0,1,2,3,4,5,6,7,8,9,10]

  return (

    <div>

        {
            num.map((i)=>{
                return i

            })
        
        }

    </div>
  )
}

export default Stampanumeri