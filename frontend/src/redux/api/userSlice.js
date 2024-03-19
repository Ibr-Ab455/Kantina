import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 currentUser: null,
 error: null
}


const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
    
    // authentication

    SignStart: ( state ) => {
      state.error = null
    },

    SignSuccess: (state, action) => {
     state.currentUser = action.payload;
     state.error = null
    },

    SignFailure: (state, action) => {
        state.error = action.payload
    },

    signOut: (state) => {
      state.currentUser = null;
      state.error = null;
     }
 }
});

 export const  { SignStart, SignSuccess, SignFailure, signOut} = userSlice.actions;
 
 export default userSlice.reducer;