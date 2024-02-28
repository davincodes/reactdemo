import { useState } from 'react'; //import useState
function App() {
  
  const [name, setName] = useState(`John`);  //name is the state (holds the value), setName is the function that will set the name. (modify and update.)
  const [counter, setCounter] = useState(0);


  return ( //return is what HTML shall it return.

  //State - allows us to dictate the status of a variable or value. ex. on or off. the button could be click, or not.
        // - something that holds a value. it needs to be import

  <>
    <h1>Hello {name} </h1>
    <h1>{counter}</h1>
    <button onClick={()=>{
      setCounter(counter+1);
    }}>
      Click me!
    </button>
    
    {counter === 10 ? (<h1 style={{color: "green"}}>Congratulations</h1>) : (<h1>Not Yet</h1>)}
    {/* Conditional  Rendering*/}

    <button onClick={()=>{
      setName (`Arben`);
    }}>Change Name
    </button>

    <input type="text" onChange={(e)=>{ // e stands for current value.
      setName(e.target.value)
    }}/>
  </>


      
  )
}

export default App
