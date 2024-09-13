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
        < >


           
            <div
                className={`flex items-center justify-center  border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white ${todo.Checked ? "bg-[#806732]" : "bg-[#5655578c]"
                    }`}
            >
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={todo.Checked}
                    onChange={toggleTodo}
                />
                <input
                    type="text"
                    className={`border  outline-none w-full bg-transparent rounded-lg ${isTodoEdetible ? "border-white/10 px-2" : "border-transparent"
                        } ${todo.CompleteTodo ? "line-through" : ""}`}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEdetible}
                />
                {/* Edit, Save Button */}
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center  bg-slate-400  hover:bg-gray-300 shrink-0 disabled:opacity-50"
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
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center  bg-slate-400  hover:bg-gray-300 shrink-0 disabled:opacity-50"
                    onClick={() => DeleteTodo(todo.id)}
                >
                    ❌
                </button>
            </div>
            
        </>
    )
};

export default TodoItems
