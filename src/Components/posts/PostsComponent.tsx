import React, {FC} from 'react';
import {IPostModel} from "../../Models/IPostModel";

interface IProps {
    posts: IPostModel[]
}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post) => (<div> {post.id} </div>))
            }
        </div>
    );
};

export default PostsComponent;