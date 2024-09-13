import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        TodoText: 'Todo Text',
        Checked: false
    }

    ],
    AddTodo: (TodoText) => { },

    UpdateTodo: (id, TodoText) => { },

    DeleteTodo: (id) => { },

    CompleteTodo: (id , Checked) => { },
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

