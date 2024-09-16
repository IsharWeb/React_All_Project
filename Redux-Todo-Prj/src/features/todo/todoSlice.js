import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {

    todos: [
        // {
        //     id: 1,
        //     text: 'ishar khan'
        // }
    ]
}

const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {

            const todo = {

                id: nanoid(),
                text: action.payload

            }

            state.todos.push(todo)

        },

        removTodo: (state, action) => {

            // state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
               state.todos = state.todos.filter((todo) => todo.id !== action.payload)

        }
        
    }
})

export const { addTodo,  removTodo } = todoSlice.actions;

export default todoSlice.reducer;
