import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const[color,setcolor]=useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}></div>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
        <button onClick={()=>setcolor('red')} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"red"}}>Red</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-full'>
        <button onClick={()=>setcolor('green')} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green"}}>green</button>
      </div>

      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-full'>
        <button onClick={()=>setcolor('yellow')} className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"yellow"}}>yellow</button>
      </div>
    </div>
     </>
  )
}

export default App
