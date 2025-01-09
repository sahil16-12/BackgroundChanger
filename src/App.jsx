import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-1000 overflow-hidden" style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5'>
          <button onClick={() => setColor("red")} className='outline-none px-3 text-white bg-red-700 rounded-3xl px-3 py-2 shadow-lg'>Red</button>
          <button onClick={() => setColor("green")}className='outline-none px-3 text-white bg-green-700 rounded-3xl px-3 py-2 shadow-lg'>Green</button>
          <button onClick={() => setColor("blue")}className='outline-none px-3 text-white bg-blue-700 rounded-3xl px-3 py-2 shadow-lg'>Blue</button>

        </div>
    </div>
    </div>
  )
}

export default App
