import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            console.log(action.payload);
        },
        resetUser: (state) => {
            state.user = null;
        }
    }
});

export const { setUser, resetUser } = loginSlice.actions;
export default loginSlice.reducer;