import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../../Components/Models/User/IUserModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {},
});

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/Users')
    }
}

export {
    userApiService
}