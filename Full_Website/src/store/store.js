import configureStore from '@reduxjs/toolkit'
import authSlice from '../featurs/authSlice';

// create store and store know about reducers
const store = configureStore(

    {
        reducer: authSlice

        
    }
    
)

export default store;