import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardItems: {}, // Change "cardItems" to a more appropriate property name
};

const cardSlice = createSlice({
    name: 'cards', // Change "cards" to a meaningful name for your slice
    initialState,
    reducers: {
        addCard: (state, action) => {
            // Modify the state to add your item
            const { id, front, back } = action.payload;
            state.cardItems[id] = {
                id,
                front,
                back
            };
        },
        // Define other reducer functions as needed
    },
    // Define extraReducers if necessary
});

export const { addCard } = cardSlice.actions;

export const selectCardById = (cardId) => (state) => state.cards.cardItems[cardId]; // Adjust the selector name

export default cardSlice.reducer;
