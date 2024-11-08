// import React from "react"
// import authSlice from "../../featurs/authSlice"
// import { logout } from "../../featurs/authSlice"
// import { useDispatch } from "react-redux"

// function LogoutBtn() {
    
//     const dispatch = useDispatch();

//     const LogoutHandler = () => {
//         authSlice.logout().then( () => {

//             dispatch(logout())
//         }
//         ).catch(() => {
//             console.log('Logout btn error');
            
//         })
//     }


//     return (
//         <button
//         className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//         onClick={LogoutHandler}
//         >Logout</button>
//     )
// }

// export default LogoutBtn


import React from "react";
import { logout } from "../../featurs/authSlice"; // Only import the logout action
import { useDispatch } from "react-redux";

function LogoutBtn() {
    const dispatch = useDispatch();

    // const LogoutHandler = () => {
    //     dispatch(logout())  // Dispatch the logout action directly
    //         .then(() => {
    //             console.log('Logout successful');
    //         })
    //         .catch(() => {
    //             console.log('Logout btn error');
    //         });
    // };

    const LogoutHandler = () => {
        try {
            dispatch(logout());
            console.log('Logout successful');
        } catch (error) {
            console.log('Logout btn error', error);
        }
    };
    

    return (
        <button
            className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={LogoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;



