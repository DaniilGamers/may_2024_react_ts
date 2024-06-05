import React, {useEffect} from 'react';
import {carService} from "../services/api.services";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value))
    }, []);

    return (
        <div>
            CarsPage
        </div>
    );
};

export default CarsPage;