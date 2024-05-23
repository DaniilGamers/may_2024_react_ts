import React from 'react';
import {NavLink} from "react-router-dom";
const HeaderComponent = () => {
    return (
        <div>
            <span><NavLink to={'users'}>Users</NavLink></span>
            <hr/>

            <span><NavLink to={'posts'}>Posts</NavLink></span>
            <hr/>

            <span><NavLink to={'comments'}>Comments</NavLink></span>
            <hr/>

        </div>
    );
};

export default HeaderComponent;