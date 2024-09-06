import React, { useEffect, useState, useSyncExternalStore } from "react";
import { TodoContext, TodoProvider } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
// import {TodoForm , TodoItems} from './Index'
function TodoFunctions() {
    const [toDos, setToDos] = useState([]);

    const AddTodo = (TodoText) => {
        setToDos((oldtodos) => [{ id: Date.now(), ...TodoText }, ...oldtodos]);
    };

    const UpdateTodo = (id, TodoText) => {
        setToDos((oldtodos) => oldtodos.map((newTodos) => (newTodos.id === id ? TodoText : newTodos)))
    };

    const DeleteTodo = (id) => {
        setToDos((oldtodos) => oldtodos.filter((dletodo) => dletodo.id !== id))
    };

    const CompleteTodo = (id, Checked) => {
        //   setToDos((oldtodos) => [{id: Date.now() , Checked: true},...oldtodos] )
        //   setToDos((oldtodos) => [oldtodos.map((newChecked) => Checked: !newChecked.Checked)])

        setToDos((oldtodos) => oldtodos.map((newChecked) => newChecked.id === id ? { ...newChecked, Checked: !newChecked.Checked } : newChecked))


        // self Explanation 


        // setToDos((oldtodos) => {
        //     return oldtodos.map(

        //         (toggleVal) => {

        //             if (toggleVal.id === id) {

        //                const toggleVal = { ...toggleVal, Checked: !toggleVal.Checked }
        //                 return toggleVal

        //             } else {

        //                 return toggleVal

        //             }
        //         });
        // });

    };

    useEffect(() => {

        const storetodos = JSON.parse(localStorage.getItem("storeTodos"));
        
        if (storetodos && storetodos.length > 0) {
             
            setToDos(storetodos)

        }
           
    }, []);

    useEffect(() => {
     
        localStorage.setItem("storeTodos" , JSON.stringify(toDos))

    } , [toDos])



    return (
        <TodoProvider value={
            { AddTodo, UpdateTodo, DeleteTodo, CompleteTodo }
        }>
            <h1>Manage your Todos</h1>
            <div>
                <TodoForm />
            </div>
            <br />
            <div>
                {
                    toDos.map((todo) => (
                        <div key={todo.id}>
                            <TodoItems todo={todo} />
                        </div>
                    ))
                }
            </div>
        </TodoProvider>



    )

}

export default TodoFunctions