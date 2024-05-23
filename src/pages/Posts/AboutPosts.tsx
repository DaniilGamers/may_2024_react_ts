import React, {useEffect, useState} from 'react';
import {IPostModel} from "../../Components/Models/Post/IPostModel";
import {postApiService} from "../../services/posts_services/posts.api.service";


const AboutPosts = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])
    useEffect(() => {
        postApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(value => <div key={value.id}><br/>{value.id} <br/><br/> user id: {value.userId} - {value.title}<br/><br/>text:<br/>{value.body}</div>)}
        </div>
    );
};

export default AboutPosts;