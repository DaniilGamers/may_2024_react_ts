import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../../Components/Models/Post/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
})

const postApiService = {
    getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('posts')
    }
}

export {
    postApiService
}