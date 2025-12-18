import { useState, useEffect } from 'react'

function Button() {
  
  const [color, setColor] = useState("white")
  const click = color => {
    setColor(color)
  }
 
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
  
    <div className = "App">
    <button onClick = {
      () => click("white")
    }>White</button>
    
    
  
    <button onClick = {
      () => click("black")
    }>Dark</button>
  </div>

)
}
export default Button;