import {createSlice} from "@reduxjs/toolkit";

export const passwordSlice = createSlice({
    name: 'passwordSlice',
    initialState: [
            'password',
            's3cret',
            'admin'
        ],
    reducers: {
        setPasswords: (state, action) => {
            state = action.payload;
        }
    }
});

export const selectPasswords = (state: any): string[] => state.passwords;
export default passwordSlice.reducer;