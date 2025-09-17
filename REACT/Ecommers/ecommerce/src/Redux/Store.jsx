import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./Slices/cartSlice.jsx";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
})

export default store;