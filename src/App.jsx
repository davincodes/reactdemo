import { useState } from 'react'; //import useState
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
function App() {

  const [todos, setTodos] = useState([]); //store todos, settodos
  const [input, setInput] = useState('');

  const newTodo = () =>{ //if you think its too long in the code you can use function then call it.
    //spread operator.
    setTodos([...todos, input]);
    setInput('');
  
  }

  return (
      <main className="container p-5">
        <h1 className="fw-bold mb-4">To-do List</h1>

        <label htmlFor="newtodo">Add a new Task</label>
        <input type="text" value={input} id="newtodo" className="form-control" onChange={(e)=>{
          setInput(e.target.value);
        }} />

        <button className="btn btn-primary mt-2" onClick={newTodo}>New Task</button> 

        <div className="card mt-3 p-3">
          {
            todos.map((todo, index) => (
              <div className="alert bg-light my-2" key={index}>{todo}</div>
            )) //todo will get the element of an array step by step, index will be the index number of the element.
          }
        </div>
      </main>


      
  )
}

export default App
