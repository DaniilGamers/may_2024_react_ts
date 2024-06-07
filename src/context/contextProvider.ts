import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {createContext, useContext} from "react";
import {ICommentsModel} from "../models/ICommentsModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[]
    },
    postStore: {
        allPosts: IPostModel[]
    },
    commentStore: {
        allComments: ICommentsModel[]
    }
}

export const defaultValue: StoreType = {
    userStore: {
        allUsers: []
    },
    postStore: {
        allPosts: []
    },
    commentStore: {
        allComments: []
    }

};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => useContext(Context);