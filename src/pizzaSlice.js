import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toppings: ['cheese', 'pepperoni'],
    gluten: false
};

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: { 
        addTopping: (state, action) => {
            state.toppings.push(action.payload);
        },
        removeTopping: (state, action) => {
            state.toppings = state.toppings.filter(topping => topping !== action.payload);
        },
        isGlutenFree: (state, action) => {
            state.gluten = !state.gluten;
        }
    }
});

export const { addTopping, removeTopping, isGlutenFree } = pizzaSlice.actions;

export default pizzaSlice.reducer;