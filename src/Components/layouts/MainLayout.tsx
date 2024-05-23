import React from 'react';
import HeaderComponent from "../header/HeaderComponent";
import {Outlet} from "react-router-dom";
import FooterComponent from "../footer/FooterComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>

        </div>
    );
};

export default MainLayout;