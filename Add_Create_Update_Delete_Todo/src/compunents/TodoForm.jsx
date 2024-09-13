import { useState } from "react";
import { useTodo } from "../context/TodoContext";


const TodoForm = () => {
    // e.preventDefault();
    const [todo , setTodo] = useState();
    const {AddTodo} = useTodo()
    
    const addtodo = (e) => {
       e.preventDefault()

    if (!todo) return

    AddTodo({todo , Checked: false})
    

   }
 


   
    return (
        <>
        {/* <form onSubmit={addtodo}>

        <h2>Add Todos</h2>
        <input 
        type="text"
        placeholder="Add Your Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        
        />

         <button type="submit">submit</button>
        </form> */}






        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
        </>
    )
};

export default TodoForm