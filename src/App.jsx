import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const add=()=> {
   
    return setCount(count + 1)

  }

  const sub =()=> {
   if (count > 0) {
      return setCount(count - 1)
    
  }
    

  }

  

  return (
    <>
      <div id='mad'>
        
        <button onClick={add}>+</button>
        <li>{count}</li>
        <button onClick={sub}>-</button>
      </div>
    </>
  )
}

export default App
