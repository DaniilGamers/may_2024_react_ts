import axios, {AxiosResponse} from 'axios';
import {IUserModel} from "../Models/IUserModel";
import {IPostModel} from "../Models/IPostModel";
import {UsersResponseModel} from "../Models/ResponseModels/UsersResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
})

const getAllUser = (): Promise<AxiosResponse<UsersResponseModel>> => {
    return axiosInstance.get('/users')
}

const getAllPosts = (id: number): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/posts/' +id)
}

export {getAllUser,
    getAllPosts
}