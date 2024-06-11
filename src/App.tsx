import React, {useEffect} from 'react';
import {commentService, postService, userService} from "./services/api.service";
import HeaderComponent from "./Components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {useStore} from "./context/store";

const App = () => {

    const {userStore} = useStore();
    const {postStore} = useStore();
    const {commentStore} = useStore();
    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComments().then(value => commentStore.loadComments(value.data))
    }, []);

    return (
        <div>
            <HeaderComponent/>

            <Outlet/>
            <hr/>
            {userStore.favoriteUser && <div>{userStore.favoriteUser.email}</div>}
            <hr/>
            {postStore.favoritePost && <div>Post title: <br/><br/>{postStore.favoritePost.title}</div>}
            <hr/>
        </div>
    );
};

export default App;