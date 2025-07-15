import { createSlice } from "@reduxjs/toolkit";
import { dummyCarData } from "../assets/assets";
const carSlice=createSlice({
    name:"car",
    initialState:{
        cars:dummyCarData
    },
    reducers:{
        addCars:(state,action)=>{
            state.cars.push(action.payload)
        },
        removeCars:(state,action)=>{
            state.cars=state.cars.filter((car)=>car._id!=action.payload)
        }
    }
})
export const {addCars,removeCars}=carSlice.actions;
export default carSlice.reducer;