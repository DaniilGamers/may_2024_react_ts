import React from 'react';
import {useAppSelector} from "../redux/store";

const PostCommentsPage = () => {
    const {posts} = useAppSelector(state => state.postSlice);
    const {comments} = useAppSelector(state => state.commentSlice)
    return (
        <div>
            {
                posts.map(post => <div key={post.id}> <ul><br/><h2>Post of title</h2> {post.title}</ul><br/><ul><h2>Comments</h2></ul><br/>{
                    comments.map(comment => <div key={comment.id}><ul><li><h3>{comment.body}</h3></li></ul></div> )
                }</div>)
            }
        </div>
    );
};

export default PostCommentsPage;