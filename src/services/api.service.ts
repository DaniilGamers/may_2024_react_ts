import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {urls} from "../constants/urls";
import {ICommentsModel} from "../models/ICommentsModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export const userService = {
    getAll: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data
    },
    getById: async (id: string|undefined): Promise<IUserModel> => {
        const response = await axiosInstance.get<IUserModel>(urls.users.base + '/' + id);
        return response.data;
    }
}

export const postService = {
    getAll: async () => {
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data;
    }
}

export const commentService = {
    getAll: async () => {
        const response = await axiosInstance.get<ICommentsModel[]>(urls.posts.base);
        return response.data;
    }
}