import {IUserModel} from "../../models/IUserModel";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services/api.service";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUserModel[];
    isLoaded: boolean;
    user: IUserModel | null;
    error: string | null
}

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    user: null,
    error: ''
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        console.log('dsadsd')
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            if (error.response) {
                return thunkAPI.rejectWithValue(error.message)
            }else {
                return thunkAPI.rejectWithValue("unknown error")
            }
        }
    }
);
const loadUsersById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string, thunkAPI)=> {

        try {

            const user = await userService.getById(id);
            return thunkAPI.fulfillWithValue(user);

            } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
        }
)

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsersById.fulfilled,
                (state, action) => {
                state.user = action.payload
            })
            .addCase(loadUsersById.rejected,
                (state, action) => {})
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(loadUsers.rejected, (state, action) => {})
            .addMatcher(isFulfilled(loadUsers, loadUsersById), (state, action) => {
                //state.error = action.payload;
            })
            .addMatcher(isRejected(loadUsers, loadUsersById), () => {
                //.....
            })
})

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUsersById
}