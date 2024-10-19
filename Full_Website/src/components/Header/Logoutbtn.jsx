import React from "react"
import authSlice from "../../featurs/authSlice"
import { logout } from "../../featurs/authSlice"
import { useDispatch } from "react-redux"

function LogoutBtn() {
    
    const dispatch = useDispatch();

    const LogoutHandler = () => {
        authSlice.logout().then( () => {

            dispatch(logout())
        }
        ).catch(() => {
            console.log('Logout btn error');
            
        })
    }


    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={LogoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn