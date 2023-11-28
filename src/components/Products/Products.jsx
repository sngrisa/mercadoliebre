import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../services/FakeStoreAPI";
import Product from "./Product/Product";


let Products = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, [])

    return (
        <>
        <h3 className="mt-5">LOS PRODUCTOS MAS COMPRADOS!</h3>
            <div id="cards_landscape_wrap-2">
                <div className="container">
                    <div className="row mb-5">
                        {
                            products.slice(0,15).map((item, idx)=>{
                                return(<Product product={item} key={idx}/>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>)
};


export default Products;