import React, { useEffect, useState, useSyncExternalStore } from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
// import {TodoForm , TodoItems} from './Index'
function TodoFunctions() {
    const [toDos, setToDos] = useState([]);

    const AddTodo = (TodoText) => {
        setToDos((oldtodos) => [{ id: Date.now(), ...TodoText }, ...oldtodos]);
        console.log(TodoText.id);
        
    };

    const UpdateTodo = (id, TodoText) => {
        setToDos((oldtodos) => oldtodos.map((newTodos) => (newTodos.id === id ? TodoText : newTodos)))
    };

    const DeleteTodo = (id) => {
        setToDos((oldtodos) => oldtodos.filter((dletodo) => dletodo.id !== id))
    };

    const CompleteTodo = (id, Checked) => {
        console.log(`My id is ${id} and the checkbox value is ${Checked}`);
        
        setToDos((oldtodos) => oldtodos.map((newChecked) => newChecked.id === id ? { ...newChecked, Checked: !newChecked.Checked } : newChecked))
        
        
        // self Explanation 
        
        //   setToDos((oldtodos) => [{id: Date.now() , Checked: true},...oldtodos] )
        //   setToDos((oldtodos) => [oldtodos.map((newChecked) => Checked: !newChecked.Checked)])


        // setToDos((oldtodos) => {
        //     return oldtodos.map(

        //         (toggleVal) => {

        //             if (toggleVal.id === id) {

        //                return toggleVal = { ...toggleVal, Checked: !toggleVal.Checked }
                        

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
            





            
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                {
                    toDos.map((todo) => (
                        <div key={todo.id}>
                            <TodoItems todo={todo} />
                        </div>
                    ))
                }
                    </div>
                </div>
            </div>
        </TodoProvider>



    )

}

export default TodoFunctions