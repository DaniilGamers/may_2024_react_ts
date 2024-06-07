import {IPostModel} from "./IPostModel";
import {ICommentsModel} from "./ICommentsModel";

export type PostWithCommentsType = IPostModel & { comments: ICommentsModel[] }