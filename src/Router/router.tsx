import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Components/layouts/MainLayout";
import AuthPage from "../pages/AuthPage";
import CarsPage from "../pages/CarsPage";

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>Err... Are you doing good??</h1>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
])