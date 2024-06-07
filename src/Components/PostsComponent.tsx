import React from 'react';
import {useContextProvider} from "../context/contextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {postStore:{allPosts}} = useContextProvider();
    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;