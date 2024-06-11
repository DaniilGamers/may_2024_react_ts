import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/store";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostCommentsComponent = () => {

    const {commentStore: {allComments}, postStore: {allPosts}} = useStore();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postWithCommentsArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allComments, allPosts]);

    useEffect(() => {
        setPostsWithCommentsState(postWithCommentsArray)
    }, [postWithCommentsArray]);

    return (
        <div>
            {
                postsWithCommentsState.map(post => <div key={post.id}>

                    <div><h1><hr/></h1></div>
                    <div>{
                        <h3><li>{post.title}</li></h3>
                    }</div>
                    <div>{
                        <h4><ul>{post.body}</ul></h4>
                    }</div>
                    <div>{
                        <h1><hr/></h1>
                    }</div>
                    <div>{
                        <h2><ul>Comments</ul></h2>
                    }</div>
                    <ul>
                        {
                            post.comments.map(comment => <div key={comment.id}><h3>{comment.email}<br/></h3>{
                                <h4>{comment.body}</h4>
                            }</div>)
                        }
                    </ul>
                </div>)
            }

        </div>
    );
};

export default PostCommentsComponent;