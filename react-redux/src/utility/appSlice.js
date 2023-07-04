import {createSlice} from "@reduxjs/toolkit";

import React from 'react'

const appSlice=createSlice({
       name:"jaiShreeRadhaDham",
       initialState:{
          change:10,
       },
       reducers:{

        changeTheChange:(state,val)=>{state.change+=val}
        
       }

})

export const {changeTheChange}=appSlice.actions;
export default appSlice.reducer

