import React, {FC} from 'react';

export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price"?: number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "brand"?: string,
    "category"?: string,
    "thumbnail"?:string,
    "images": string[]
}

export type IProductTypeProps = IProductProps & { children?: React.ReactNode };
const Product: FC<IProductTypeProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {
    return (
        <div>
            <h3 style={{borderStyle: "solid"}}></h3>
            <h2>
                <li>{title} - {brand} - stocks: {stock}</li>
            </h2>
            <h3>
                <ul>Category: {category}</ul>
            </h3>
            <h3>
                <ul>{description}</ul>
            </h3>
            <h3>
                <ul>Rating: {rating}</ul>
            </h3>

            <img src={thumbnail} alt={title}/>

            <h3>
                <ul>Price: {price}</ul>
            </h3>

            <h3>
                <ul>(Discount: {discountPercentage})</ul>
            </h3>
            <h3 style={{borderStyle: "solid"}}></h3>
            <h3>
                <ul>Images</ul>
            </h3>


            <ul>
                {
                    images?.map((images) => <img src={images}></img>)
                }
            </ul>

        </div>
    );
};

export default Product;