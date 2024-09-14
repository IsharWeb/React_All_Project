import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {

    todos: [
        {
            id: 1,
            text: 'ishar khan'
        }
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

            state.todos = state.todos.push(todo)

        },

        remoTodo: (state, action) => {

            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)

        },

        updateTodo: (state, action) => {

            // const todo = state.todos.find((todo) => todo.id === action.payload)
            // if (todo) {
            //     todo.text = action.payload
            // }

            // state.todos = [...state.todos]

            // const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id)

            // if (todoIndex !== -1) {
            //     state.todos[todoIndex] = {
            //        ...state.todos[todoIndex],
            //         text: action.payload.text
            //     }
            // }

            const todo = {

                id: action.payload,
                text: action.payload

            }

            state.todos = state.todos.forEach((t) => t.id === todo.id ? { ...t, text: action.payload } : t)
            state.todos.push(todo)

        }
    }
})

export const { addTodo, updateTodo, remoTodo } = todoSlice.actions;

export default todoSlice.reducer;
