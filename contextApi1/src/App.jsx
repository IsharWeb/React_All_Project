import React from 'react'
import ContextProvider from './context/provider'
import LoginContext from './compunent/loginContext'
import Profile from './compunent/profile'

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 flex whitespace-nowrap bg-center items-center dark:text-white">
      <h1 className="text-4xl font-bold text-center py-5">Hello, World!</h1>
      <ContextProvider>
        <h1 className="text-2xl text-center my-5">Login form</h1>
        <LoginContext />
        <Profile />
      </ContextProvider>
    </div>
  );
}


export default App;