import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentsModel} from "../models/ICommentsModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        loadUsers: (users: IUserModel[]) => void,
        setFavoriteUser: (obj: IUserModel) => void,
        favoriteUser: IUserModel | null
    },
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void,
        setFavoritePost: (obj_post: IPostModel) => void,
        favoritePost: IPostModel | null
    },
    commentStore: {
        allComments: ICommentsModel[],
        loadComments: (comments: ICommentsModel[]) => void
    }
}

export const useStore = create<StoreType>()(set => ({
    userStore: {
        allUsers: [],
        loadUsers: (users: IUserModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        allUsers: users
                    }
                }
            });
        },
        favoriteUser: null,
        setFavoriteUser: (obj: IUserModel) => {
            return set(state => {
                return {
                    ...state,
                    userStore: {
                        ...state.userStore,
                        favoriteUser: obj
                    }
                }
            });
        }
    },
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return set((state1) => {
                return {
                    ...state1,
                    postStore: {
                        ...state1.postStore,
                        allPosts: posts
                    }
                }
            });
        },
        favoritePost: null,
        setFavoritePost: (obj_post: IPostModel) => {
            return set(state => {
                return {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        favoritePost: obj_post
                    }
                }
            });
        }
    },
    commentStore: {
        allComments: [],
        loadComments: (comments: ICommentsModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    commentStore: {
                        ...state.commentStore,
                        allComments: comments
                    }
                }
            })
        }
    }
}))