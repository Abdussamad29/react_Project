import { useState } from "react"


function App() {
  const [Color, setColor] = useState('orange')
  function red(){
    return setColor('red')
  }
  function green(){
    return setColor('green')
  }
   function crimson(){
    return setColor('crimson')
  } 
  function yellow(){
    return setColor('yellow')
  }

  return (
    <>
   

 
   <div className="w-full h-screen duration-200" style={{backgroundColor:Color}}>
   <h2>choose your color</h2>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded 3xl">
        <button onClick={red} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'red'}}>Red</button>
      </div>
      <div onClick={(green)} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded 3xl">
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'green'}}>Green</button>
      </div>
      <div onClick={(crimson)}  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded 3xl">
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'crimson'}}>Crimson</button>
      </div>
      <div onClick={(yellow)} className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded 3xl">
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'yellow'}}>Yellow</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
