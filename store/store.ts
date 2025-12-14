import {configureStore} from "@reduxjs/toolkit";
import passwordSlice from "@/store/passwordsSlice";

export const store = configureStore({
    reducer: {
        passwords: passwordSlice
    }
});
