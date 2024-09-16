import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {

    const [inputVal, setInputVal] = useState('');

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {

        e.preventDefault()
        
        dispatch(addTodo(inputVal))
        
        setInputVal('')

    }

    return (

        <>

        
          <form onSubmit={addTodoHandler} className="space-x-3  flex justify-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg"
        >
        Add Todo
      </button>
    </form>


        
        </>

    )

}

export default AddTodo