import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  
  const addvalue=()=>{
    if(count==20){
      count=0;
    }
    setCount(count+1);
  }
  const removevalue=()=>{
    setCount(count-1);
  }
  return (
    <>
     <h2>Counter value: {count}</h2>
    <button onClick={addvalue}>Add value  {count}</button>
    <br/>
    <br/>
    <button onClick={removevalue}>remove value {count}</button>
    </>
  )
}

export default App
