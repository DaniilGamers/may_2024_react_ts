import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice";
import {postSlice} from "./slices/postSlice";
import {useDispatch, useSelector} from "react-redux";
import {commentSlice} from "./slices/commentSlice";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()