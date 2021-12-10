import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const addQuizForTopicId = (payload) => {
    const { topicId, id } = payload;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizIdForTopic({
            quizId: id,
            topicId: topicId
        }))
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;