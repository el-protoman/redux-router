import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {},
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopics: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: [],
            };
        },
    },
    extraReducers: {
        "quizzes/addQuiz": (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);
        }
    },
});

export const { addTopics } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
