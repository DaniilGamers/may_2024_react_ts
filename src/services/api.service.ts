import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentsModel} from "../models/ICommentsModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const userService = {
    getUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
        return await axiosInstance.get<IUserModel[]>('/users')
    }
}

const postService = {
    getPosts: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts')
    }
}

const commentService = {
    getComments: async (): Promise<AxiosResponse<ICommentsModel[]>> => {
        return await axiosInstance.get<ICommentsModel[]>('/comments')
    }
}

export {
    userService,
    postService,
    commentService
}