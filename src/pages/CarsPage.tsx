import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.services";
import CarsComponent from "../Components/CarsComponent";
import {ICarPaginatedModel} from "../Models/ICarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../Components/PaginationComponent";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'})

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    })

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value){
                setCarsPaginatedObject(value)
            }
        })
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next})
                break;
        }
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent changePage={changePage} next={carsPaginatedObject.next} prev={carsPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;