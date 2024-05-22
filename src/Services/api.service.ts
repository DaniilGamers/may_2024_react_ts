import axios, {AxiosResponse} from "axios";
import {IFormProps} from "../Components/Post/PostFormComponent";
import {IPostModel} from "../Components/Models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const postService = {
    getAllPosts: () => {return axiosInstance.get('/posts')},
    savePost:({title, userId, body}: IFormProps):Promise<AxiosResponse<IPostModel>> => {

        return axiosInstance.post(
            '/posts',
            {body, title, userId},
            {headers: {"Content-Type": "application/json"}})

    }
}

export {
    postService
}