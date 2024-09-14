import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
function AddTodo() {

    const [inputVal, setInputVal] = useState('');

    const dispatch = useDispatch();

    const AddTodoBtn = () => {

        dispatch(setInputVal(inputVal))

        setInputVal("")

        // if (inputVal) {
        //     dispatch({ type: 'ADD_TODO', payload: inputVal });
        //     setInputVal('');
        // } else {
        //     alert('Please enter a value');
        // }
 
    }

    return (
    
        <>
        <input 
        type="text" 
        value={inputVal}
        />
        <button onClick={AddTodoBtn}></button>
        </>
  
)

}

export default AddTodo