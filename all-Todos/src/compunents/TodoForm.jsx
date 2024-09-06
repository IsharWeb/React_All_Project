import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";


const TodoForm = (e) => {
    e.preventDefault();
    const [todo , setTodo] = useState();
    const {AddTodo} = useTodo()
    
    const addtodo = () => {
       e.preventDefault()

    if (!todo) return

    AddTodo({todo , Checked: false})
    

   }
 


   
    return (
        <>
        <form onSubmit={addtodo}>

        <h1>TOdo From Form</h1>
        <input 
        type="text"
        placeholder="Add Your Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        
        />

         <button type="submit">submit</button>
        </form>
        </>
    )
};

export default TodoForm