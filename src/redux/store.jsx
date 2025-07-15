import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice"
export const store=configureStore({
    reducer:{
        car:carSlice

    }
})