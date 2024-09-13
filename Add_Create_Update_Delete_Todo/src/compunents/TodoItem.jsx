import { useState } from "react";
import { useTodo } from "../context/TodoContext";


const TodoItems = ({ todo }) => {

    const [isTodoEdetible, setisTodoEdetible] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { UpdateTodo, DeleteTodo, CompleteTodo } = useTodo('')

    const editeTodo = () => {
        UpdateTodo(todo.id, { ...todo, TodoText: todoMsg })
        setisTodoEdetible(false)
    }
    const toggleTodo = () => {
        CompleteTodo(todo.id)

    }

    return (
        <>
            {/* <input
                type="checkbox"
                checked={todo.checked}
                onChange={toggleTodo}
            />
            <input 
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEdetible}
            />
            <button
            onClick={() => {
                if (todo.CompleteTodo) return;
                
                if (isTodoEdetible) {
                    editeTodo();
                } else setisTodoEdetible ((prive) => !prive) 
                
            }}
            disabled={todo.CompleteTodo}

            >
                {isTodoEdetible ? " Seve " : " Edite "}

            </button>
            
            <button onClick={() => DeleteTodo( todo.id )} ></button>


 */}


















            
            <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={toggleTodo}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEdetible ? "border-black/10 px-2" : "border-transparent"
                } ${todo.CompleteTodo ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEdetible}
            />
            {/* Edit, Save Button */}
             <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.CompleteTodo) return;

                    if (isTodoEdetible) {
                        editeTodo();
                    } else setisTodoEdetible((prev) => !prev);
                }}
                disabled={todo.CompleteTodo}
            >
                {isTodoEdetible ? "📁" : "✏️"}
            </button> 
            {/* Delete Todo Button */}
             <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => DeleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>  

        </>
    )
};

export default TodoItems
