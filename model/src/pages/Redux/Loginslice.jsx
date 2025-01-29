import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:'login',
    initialState:{
        loginData:null
    },
   reducers:{
    addtoUserdata:(state,action)=>{
        state.loginData=action.payload
    },
    removedata:(state,action)=>{
        state.loginData=null

    }
   }
    
});

export const { addtoUserdata,removedata} = loginSlice.actions;
export default loginSlice.reducer;