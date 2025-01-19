import { createContext, useContext } from "react";

export const TodoContext = createContext({


    myTodos: [
        {
            id: 1,
            text: 'Self Todo create',
            checked: false,
        }
    ],

    // employees [
    //     { id: 1, name: "Vasu", location: "Bangalore", designation: "Sr Manager" }
    //   ] ,

    addTodo: (text) => { },
    updateTodo: (text, id) => { },
    deleteTodo: (id) => { },
    createdTodo: (id) => { }

});


export const useTodo = () => {

    return useContext(TodoContext);

}

export const TodoProvider = TodoContext.Provider;