import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {},
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload
        },
    },
})

export const { addQuiz } = quizzesSlice.actions;

export const selectQuizzes = (state) => state.quizzes.quizzes

export default quizzesSlice.reducer;