import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null

    },

    reducers: {
        signinuser: (state, action) => {
            state.user = action.payload;
        },

        signoutuser: (state) => {
            state.user = null;
        }
    }
})

export const {signinuser, signoutuser} = userSlice.actions 

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;