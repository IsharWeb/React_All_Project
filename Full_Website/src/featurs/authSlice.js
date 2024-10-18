import { createSlice } from "@reduxjs/toolkit";

// create initial State
const initialState = {

    status: false,
    userData: null

}

// add slice name, initialState and all reducers
const authSlice = createSlice({

    name: 'Ishar Auth',

    initialState,

    reducers: {

        // login reducer
        login: (State, action) => {

            State.status = true,
                State.userData = action.payload

        },

        // logout reducer
        logout: (State) => {

            State.status = false,
                State.userData = null

        }

    }

})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;