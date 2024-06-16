import React from 'react';
import {useAppSelector} from "../redux/store";


const PostsPage = () => {

    const {posts} = useAppSelector(state => state.postSlice);
    return (
        <div>
            {
                posts.map(post => <div key={post.id}> <ul><li>{post.title}</li></ul></div>)
            }
        </div>
    );
};

export default PostsPage;