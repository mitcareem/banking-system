import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
};

export const bankSlice = createSlice({
    name: "bank",
    initialState,
    reducers: {
        withDrawAmount: (state, action) => {
            state.amount -= action.payload;
        },
        addAmount: (state, action) => {
            state.amount += action.payload;
        },
    },
});

export const { withDrawAmount, addAmount } = bankSlice.actions;

export default bankSlice.reducer;
