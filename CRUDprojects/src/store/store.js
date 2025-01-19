import { configureStore } from '@reduxjs/toolkit'
import configSlice from './loginSlice';

const store = configureStore({

    reducer: {
        storeLogin: configSlice.reducer
    }

})
// console.log(store.reducer);

export default store;