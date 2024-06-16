import React, {FC, useEffect} from 'react';
import HeaderComponent from "./Components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";
import {commentActions} from "./redux/slices/commentSlice";

const App: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());

    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default App;