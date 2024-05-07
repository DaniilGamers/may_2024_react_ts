import React, {useState} from 'react';
import UsersComponent from "./Components/Users/UsersComponent";
/*import Products from "./Components/Products/Products";*/
import PostsComponent from "./Components/posts/PostsComponent";
import {getAllPosts} from "./services/users.api.service";
import {IPostModel} from "./Models/IPostModel";

const App = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);
    const lift =(userId:number)=>{
        getAllPosts(userId).then(({data}) => {
            console.log(data)
            setPosts(data)
        })
    }

    return (
        <div className="App">

            <div className={'users'}><UsersComponent lift={lift}/></div>
            <div className={'posts'}>
                <PostsComponent posts={posts}/>
            </div>

        </div>
    );
};

export default App;