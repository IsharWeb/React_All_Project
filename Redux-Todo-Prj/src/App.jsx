import AddTodo from './compunents/AddTodo'
import DeleteTodo from './compunents/DeleteTodo'

import './App.css'

function App() {

  return (
    <>
    <div className='bg-black h-screen w-full text-white p-24'>
     <AddTodo />
     <br />
     <DeleteTodo />
    </div>

    </>
  )
}

export default App
