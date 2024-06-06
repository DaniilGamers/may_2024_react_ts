import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../Models/AuthDataModel";
import {ITokenObtainPair} from "../Models/ITokenObtainPair";
import {retrieveLocalStorageData} from "./helpers/helpers";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {

        const iTokenObtainPair = retrieveLocalStorageData<ITokenObtainPair>('tokenPair')

        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access)
        }

    return request
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try{
        response =
            await axiosInstance.post<ITokenObtainPair>('/auth',authData);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));

}catch (error){
    console.log(error);

}

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
}

const carService = {
    getCars: async (page: string) => {

        try {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
        return response.data;

        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError?.response?.status === 401){
                const refreshToken = retrieveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars(page);
            }
        }
    }
}

export {
    authService,
    carService
}