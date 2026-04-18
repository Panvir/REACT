import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)//setCountr ipdae kreha counter(varibale hai ye) ko 25 is initial value
  //ue state retur 2 thnkgs at 0th index varibale and 1st index fxn is coller

  const removeValue=()=>{
    if(counter>0)
      setCounter(counter-1);
    
  }
  const addvalue=()=>{
    // console.log(`${counter}`);
    if(counter<20)
    setCounter(counter+1)
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Couter value:{counter}</h2>
     <button onClick={addvalue}>add Value {counter}</button>
    <br />
     <button onClick={removeValue}>Remove Value{counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App
