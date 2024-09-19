import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Laout from './Laout'
import App from './App'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { About, Home, Contect, GithubApi, User } from './compunents/index'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Laout />,
    children: [
      {
        path:'',
        element: <Home /> 
      },
      {
        path:'about',
        element: <About /> 
      },{
        path:'contact',
        element: <Contect /> 
      },{
        path:'github',
        element: <GithubApi /> 
      },
      {
        path:'user/:UserLink',
        element: <User /> 
      }
    ]
      }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}/>
  </StrictMode>,
)
