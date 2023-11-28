import React, { useEffect, useState } from 'react';
import { getProductById } from '../../services/FakeStoreAPI';
import "./DetailsProduct.css";
import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct/CardProduct';

const DetailsProduct = () => {

    let [product, setProduct] = useState({});
    let { id } = useParams();


    useEffect(() => {
        getProductById(id).then((producT) => setProduct(producT));
        console.log(product);
    }, [])

    return (
        <>
            <div className="container mb-5">
                <CardProduct product={product}/>
            </div>
        </>
    )
}

export default DetailsProduct