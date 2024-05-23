import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./Components/layouts/MainLayout";
import AboutUsers from "./pages/Users/AboutUsers";
import AboutPosts from "./pages/Posts/AboutPosts";
import AboutComments from "./pages/Comments/AboutComments";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: 'users',
            element: <AboutUsers/>
        },
        {
            path: 'posts',
            element: <AboutPosts/>
        },
        {
            path: 'comments',
            element: <AboutComments/>
        }
    ]
}])

root.render(
    <RouterProvider router={browserRouter}/>
);