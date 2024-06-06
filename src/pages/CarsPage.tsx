import React, {useEffect} from 'react';
import {carService} from "../services/api.services";
import CarsComponent from "../Components/CarsComponent";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value))
    }, []);

    return (
        <div>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;