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
            <input
                type="checkbox"
                checked={todo.CompleteTodo}
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
            
            <button onClick={() => DeleteTodo(todo.id )} ></button>
        </>
    )
};

export default TodoItems
