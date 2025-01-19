import React, { useState } from 'react'
import { useTodo } from '../context/Todocontext'

// function InputTodo({ todo }) {

//     const [addValue, setAddValue] = useState('')
//     const { addTodo } = useTodo()

//     const addTodoVal = (e) => {

//         e.preventDefault()
//         if (!addValue) return
//         // setAddValue(addTodo)
//         // addTodo(setAddValue.push(addValue))
//         addTodo({ text: addValue, checked: false })
//         setAddValue('')


//     }

//     console.log("addvalue = ", addValue, addTodoVal);

//     return (
//         <div>
//             <form onSubmit={addTodoVal}>

//                 <input
//                     className="shadow appearance-none border justify-center rounded w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
//                     placeholder="Enter your text"
//                     type="text"
//                     value={addValue}
//                     onChange={(e) => setAddValue(e.target.value)}
//                 //  onChange={e  => addTodo(e.target.value)}


//                 />
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="mt-5 bg-green-400 w-52 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type='submit'
//                     >
//                         Submit {/* {!editMode ? "ADD EMPLOYEE" : "EDIT EMPLOYEE"} */}
//                     </button>

//                 </div>
//             </form>

//         </div>
//     )
// }

function InputTodo({ todos }) {
  const [myTodo, setMyTodo] = useState('');
  const { addTodo } = useTodo()
  const addValueFunction = (e) => {
    e.preventDefault()
    addTodo({ text: myTodo, checked: false })
    setMyTodo("")
  }

  return (

    <>
      <form onSubmit={addValueFunction}>

        <input
          type="text"
          value={myTodo}
          onChange={(e) => setMyTodo(e.target.value)}
        />
        <button type='submit' > Submit </button>
      </form>
    </>


  )

}

export default InputTodo