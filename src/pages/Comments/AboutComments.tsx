import React, {useEffect, useState} from 'react';
import {ICommentModel} from "../../Components/Models/Comment/ICommentModel";
import {commentApiService} from "../../services/comments_services/comments.api.service";

const AboutComments = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        commentApiService.getAllComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments.map(value => <div key={value.id}><br/>Id - {value.id}<br/><br/> post id: {value.postId} - {value.name}<br/><br/>Email: {value.email}<br/><br/>text:<br/><br/>{value.body}</div>)}
        </div>
    );
};

export default AboutComments;