import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    userLogin: [

        {
            userName: "ishar khan",
            userEmail: "ishar@example.com",
            userpass: "password123",
            userMsg: "Hello",
            userStatus: "active",
            id: nanoid()

        },

    ]

}

const configSlice = createSlice({

    name: "Login From",
    initialState,
    reducers: {

        login: (state, action) => {

            const newUser = {

                userName: action.payload.userName,
                userEmail: action.payload.userEmail,
                userpass: action.payload.userpass,
                userMsg: action.payload.userMsg,
                userStatus: action.payload.userStatus,
                id: nanoid(),

            }

            state.userLogin.push(newUser)

        },

        logout: (state, action) => {

            state.userLogin =
                state.userLogin.filter(
                    (newUser) => newUser.id !== action.payload
                )
            // const newUser = {
            //     id: null,
            //     userName: null,
            //     userStatus: false,
            //     userData: null,
            // }
            // state.userStatus = false;
            // state.userData = null;
        }

    }
})

export const { login, logout } = configSlice.actions;
export default configSlice;