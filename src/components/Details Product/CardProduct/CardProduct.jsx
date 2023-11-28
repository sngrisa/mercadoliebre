import React from 'react';
import "./CardProduct.css";
import Swal from 'sweetalert2';

const CardProduct = ({product}) => {

    let buyMade = () => {
        Swal.fire({
            title: `<i class="bi bi-bag-heart-fill"></i> Comprar Producto?`,
            text:`${product.title}`,
            showDenyButton: true,
            confirmButtonText: `<i class="bi bi-bag-fill"></i> Realizar Compra`,
            denyButtonText: `<i class="bi bi-x-circle-fill"></i> Cancelar Compra`
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(`Compraste!!! `, `${product.title}`, "success");
            } 
          });
    }

    return (
        <>
            <div className="col p-3 main-section bg-white mt-5 card-product">
                    <div className="row m-0">
                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img src={product.image} className="border p-3 img-cardDetails" alt={product.title} />
                        </div>
                        <div className="col-lg-8">
                            <div className="right-side-pro-detail border p-3 m-0 card-details">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span><i class="bi bi-tags-fill"></i> {String(product.category).toUpperCase()}</span>
                                        <p className="m-0 p-0">{product.title}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0 price-pro">${product.price}</p>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                        <h5><b><i class="bi bi-ticket-detailed-fill"></i> Detalles del producto:</b></h5>
                                        <span>{String(product.description).substring(0,1).toUpperCase()+String(product.description).substring(1)}</span>
                                        <hr className="m-0 pt-2 mt-2" />
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-center">
                                        <h6><b><i class="bi bi-basket3-fill"></i> Cantidad :</b></h6>
                                        <input type="number" min="1" max="99" maxlength="2" value="26" class="form-control text-center w-25 ml-4"></input>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="col-lg-12">
                                            <button onClick={buyMade} className="btn btn-success w-100"><i class="bi bi-bag-fill"></i> Comprar Ahora</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="col-lg-12">
                                            <a href="/" className="btn btn-danger w-100"><i class="bi bi-backspace-fill"></i> Regresar a la pagina de Productos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CardProduct