import React from "react";
import "./Product.css";

export default function Product({ product }) {
    return (<>
        <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-4">
            <a href={`/products/${product.id}`}>
                <div className="card-flyer">
                    <div className="text-box">
                        <div className="image-box">
                            <img src={product.image} alt={product.title} className="card-img-top" />
                        </div>
                        <div className="text-container">
                            <h6 class="card-title">{String(product.title).slice(0,20)}</h6>
                        </div>
                        <div className="card-footer text-center">
                            <div className="row">
                                <div className="col-6">
                                    <h6><i className="bi bi-tag"></i> Price: <i className="bi bi-currency-dollar"></i><b>{product.price}</b> </h6>
                                </div>
                                <div className="col-6">
                                    <h6><i className="bi bi-basket3"></i> Stock: <b>{Math.floor(Math.random() * 5) + 1}</b></h6>
                                </div>
                            </div>
                            <hr></hr>
                            <div>
                                <a className="btn btn-block btn-warning text-white mb-3" href={`/products/${product.id}`}><i className="bi bi-cart"></i> Comprar Ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    </>
    );

}