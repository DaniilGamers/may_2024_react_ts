import React, {FC} from 'react';
import {ICarWithAuthModel} from "../Models/ICarWithAuthModel";

interface IProps {
    cars: ICarWithAuthModel[]
}

const CarsComponent:FC<IProps> = ({cars}) => {
    return (
        <div>
            {
                cars.map(car => <div key={car.id}>{car.id}  {car.brand} --- {car.year}</div>)
            }
        </div>
    );
};

export default CarsComponent;