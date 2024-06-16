import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {commentService} from "../../services/api.service";
import {ICommentsModel} from "../../models/ICommentsModel";

type commentSliceType = {
    comments: ICommentsModel[];
}

const commentsInitState: commentSliceType = {
    comments: []
}

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getAll()
            return comments
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentsInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addCase(loadComments.rejected, (state, action) => {})
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments
}