import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/loginSlice'

function Logout() {

  const userLogin = useSelector(state => state.storeLogin.userLogin);
  console.log('Current userLogin state:', userLogin);
  const dispatch = useDispatch()


  return (

    <>
      {
        Array.isArray(userLogin) && userLogin.map((user) => (
          // conole.log(user),
          <div key={user.id}>
            <button
              className='bg-slate-500'
              onClick={() => dispatch(logout(user.id))}>
              Logout {user.userName}
            </button>
          </div>
        ))
      }

    </>
  )
}

export default Logout