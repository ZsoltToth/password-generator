import {createSlice} from "@reduxjs/toolkit";
import passwordGenerator from "password-generator";

export const passwordSlice = createSlice({
    name: 'passwordSlice',
    initialState: { passwords: [
            'password',
            's3cret',
            'admin'
        ]},
    reducers: {
        setPasswords: (state, action) => {
            state.passwords = action.payload;
        }
    }
});

export const generatePasswords = (length: number, count: number) => {
    let passwords: string[] = [];
    for (let i = 0; i < count; i++) {
        passwords.push(passwordGenerator(length));
    }
    return passwordSlice.actions.setPasswords(passwords);
}

export const selectPasswords = (state: any): string[] => state.passwords.passwords;
export default passwordSlice.reducer;