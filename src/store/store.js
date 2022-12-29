import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bankReducer from "./bankSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        bank: bankReducer,
    },
});
