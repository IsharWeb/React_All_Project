import React from "react"
import { useState } from "react"
import { TodoProvider, useTodo, TodoContext } from "./context/Todocontext"
import InputTodo from "./compunents/InputTodo"
// import BtnTodo from "./compunents/BtnTodo"

// function App() {

//   const [todocontext, setTodoContext] = useState([])
//   // const { } = useTodo()
//   // const [context, setContext] = useState({})

//   const addTodo = (todo) => {

//     //setTodoContext((e) => [{ id: Date.now, todo:text }, e, ...todo])
//     if (!todo.text.trim()) return; // Ignore empty todos
//     setTodoContext((oldArray) => [...oldArray, { id: Date.now(), ...todo }]);
//     console.log(oldArray);
//     console.log(todo, todocontext);

//   }

//   console.log(addTodo);

//   // const submitHandler = (e) => {
//   //   e.preventDefault()
//   //   console.log('hello the button was submit');
//   // }


//   return (

//     <TodoProvider value={{ addT>odo, myTodos: todocontext }}>
//       <div className="flex w-full absolute justify-center bg-black items-center h-full">
//         <IntputTodo />
//         {todocontext.map((todo) => (
//           <h1 key={todo.id}>{todo.text}</h1>
//         ))}

//         {/* Error 
//          <IntputTodo
//           value=''
//           onchange={e => addTodo(e.target.value)}
//         />

//         <BtnTodo
//           onClick={submitHandler}

//         />
//         {todocontext} 
//          <input
//         type="text"
//         value={todocontext}
//         onChange={addTodo}
//         /> */}
//         {/* {myTodos.map((todo) => (
//           <h1 key={todo.id}>
//         <IntputTodo todo={todo} />

//           </h1>
//         ))} */}
//       </div>
//     </TodoProvider>

//   )
// }

function App() {

  const [objTodo, setObjTodo] = useState([]);

  const addTodo = (todo) => {

    if (!todo.text.trim()) return; // Ignore empty todos
    //  if(!objTodo.text.trimp()) return // my err
    setObjTodo((oldValues) => [...oldValues, { id: Date.now(), ...todo }])
    setObjTodo("")

  };

  const updateTodo = (update) => { };
  const deleteTodo = (dele) => { };
  const createdTodo = (created) => { };

  return (

    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, createdTodo, myTodos: objTodo}}>
     
      <InputTodo />
      
      {objTodo.map((todos) => (
        
        <div key={todos.id}>{todos.text}</div>

      ))}

    </TodoProvider>
  )
}


export default App
