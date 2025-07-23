import React, { useEffect, useState } from 'react'

const Clock = (props) => {
  const t = Date.now() + 3600 * props.timezone * 1000;
  const dateInit = new Date(t);
  const [date, setDate] = useState(dateInit);


  useEffect(() => {
    setTimeout(() => {

      const t = date.getTime() + 1000;
      setDate(new Date(t));


    }, 1000);




  }, [date]);



  return (
    <h3>in {props.country} sono le {date.toLocaleDateString() + " " + date.toLocaleTimeString()}</h3>


  )
}

export default Clock