import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 12
    },
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        incrementBy: (state, action) => {
            state.counter += action.payload;
        },
        decrement: (state) => {
            state.counter--;
        }
    }
});

export const { increment, incrementBy, decrement } = counterSlice.actions;