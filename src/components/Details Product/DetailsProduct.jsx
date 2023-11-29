import React, { useEffect, useState } from 'react';
import { getProductById } from '../../services/FakeStoreAPI';
import "./DetailsProduct.css";
import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct/CardProduct';

const DetailsProduct = () => {

    let [product, setProduct] = useState({});
    let { id } = useParams();
    let stock = Number(Math.floor(Math.random()*33)+1);


    useEffect(() => {
        getProductById(id).then((producT) => setProduct(producT));
    }, [])

    return (
        <>
            <div className="container mb-5">
                <CardProduct product={product} stock={stock}/>
            </div>
        </>
    )
}

export default DetailsProduct