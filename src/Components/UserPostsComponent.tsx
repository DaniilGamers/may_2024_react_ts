import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/store";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostsComponent = () => {

    const {postStore: {allPosts}, userStore: {allUsers}} = useStore();
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([]);

    const userWithPostsArray = useMemo(() => {
        return () => {
            return allUsers.map(user =>{
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            });
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPostsState(userWithPostsArray);
    }, [userWithPostsArray]);

    return (
        <div>
            <br/>
            {
                usersWithPostsState.map(user => <div key={user.id}>
                    <div>{user.username}</div>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}>{post.title}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPostsComponent;