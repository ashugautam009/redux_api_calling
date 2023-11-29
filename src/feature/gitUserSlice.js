import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllData=createAsyncThunk("gitUser",async()=>{
    const response =await fetch ("")
})

export const gitUser= createSlice({
    name: "gitUser",
    initialState:{
        users:[],
        loading:false,
        error:null,
    }
})