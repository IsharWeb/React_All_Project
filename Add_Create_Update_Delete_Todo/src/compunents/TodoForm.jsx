import { useState } from "react";
import { useTodo } from "../context/TodoContext";


const TodoForm = () => {
    // e.preventDefault();
    const [todo, setTodo] = useState('');
    const { AddTodo } = useTodo()

    const addtodo = (e) => {
        e.preventDefault()

        if (!todo) return

        AddTodo({ todo, Checked: false })


    }

    return (
        <>

            <form onSubmit={addtodo} className="flex">
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 
                    ml-14
                    bg-white/20 py-1.5"
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 text-white  inline-flex text-sm border border-black/10 justify-center items-center  bg-slate-400  hover:bg-gray-300 shrink-0 
                mr-14
                disabled:opacity-50">
                    Add
                </button>
            </form>
        </>
    )
};

export default TodoForm