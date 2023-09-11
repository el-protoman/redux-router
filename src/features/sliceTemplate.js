import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {}, // Change "items" to a more appropriate property name
};

const yourSlice = createSlice({
    name: 'yourSliceName', // Change "yourSliceName" to a meaningful name for your slice
    initialState,
    reducers: {
        addYourItem: (state, action) => {
            // Modify the state to add your item
            const { id, /* other properties */ } = action.payload;
            state.items[id] = {
                id,
                /* other properties */
            };
        },
        // Define other reducer functions as needed
    },
    // Define extraReducers if necessary
});

export const { addYourItem } = yourSlice.actions;

export const selectYourItems = (state) => state.yourSliceName.items; // Adjust the selector name

export default yourSlice.reducer;
