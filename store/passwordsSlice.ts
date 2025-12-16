import {createSlice} from "@reduxjs/toolkit";
import * as Crypto from 'expo-crypto'

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
        passwords.push(generatePassword(length));
    }
    return passwordSlice.actions.setPasswords(passwords);
}

export const generatePassword = (length: number) : string => {
    let randomBytes : Uint8Array = Crypto.getRandomBytes(length);
    const mappedBytes = randomBytes.map(b => (b % 25) + 65);
    const textDecoder = new TextDecoder();
    const result = textDecoder.decode(mappedBytes);
    return result;
}

export const selectPasswords = (state: any): string[] => state.passwords.passwords;
export default passwordSlice.reducer;