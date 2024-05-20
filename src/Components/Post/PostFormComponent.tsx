import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../Validators/post.validator";
import {IPostModel} from "../Models/IPostModel";

interface IFormProps {
    id: number,
    userId: number,
    title: string,
    body: string

}

const PostFormComponent: FC = () => {

    const {
        register,
        handleSubmit,
        formState:{errors, isValid}
    } = useForm<IFormProps>({mode: "all", resolver: joiResolver(postValidator)});

    const [post, setPosts] = useState<IPostModel | null>(null)
    
    const save = ({body, title, userId}: IFormProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
            headers: {
        'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId

        })
        }).then(value => value.json()).then(value => setPosts(value))
    };

    return (
        <div className={'Box'}>
            <form className={'Box'} onSubmit={handleSubmit(save)}>



                {errors.title && <span>{errors.title.message}</span>}

                <input className={'titleBox'} type="text" {...register('title')}/>

                {errors.body && <span>{errors.body.message}</span>}

                <input className={'postBox'} type="text" {...register('body')}/>

                {errors.userId && <span>{errors.userId.message}</span>}

                <input className={'usernameBox'} type="number" {...register('userId')}/>

                <button disabled={!isValid}>Save</button>

            </form>

            {post && <h3> saved post -id {post.id} - "{post.title}"<br/><br/> "{post.body}"<br/><ul>user id - {post.userId}</ul> </h3>}

        </div>
    );
};

export default PostFormComponent;