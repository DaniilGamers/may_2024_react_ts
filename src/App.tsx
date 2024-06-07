import React, {useEffect, useState} from 'react';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {commentService, postService, userService} from "./services/api.service";
import HeaderComponent from "./Components/HeaderComponent";
import {Outlet} from "react-router-dom";
import {Context} from "./context/contextProvider";
import {ICommentsModel} from "./models/ICommentsModel";

const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [comments, setComments] = useState<ICommentsModel[]>([])

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            <HeaderComponent/>

            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                },
                postStore: {
                    allPosts: posts,
                },
                commentStore: {
                    allComments: comments,
                }

            }}>
            <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default App;