import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'users'}>user page</Link></li>
            <li><Link to={'posts'}>posts page</Link></li>
            <li><Link to={'userPosts'}>users with posts page</Link></li>
            <li><Link to={'postComments'}>posts with comments page</Link></li>
        </div>
    );
};

export default HeaderComponent;