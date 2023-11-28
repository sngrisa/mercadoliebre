import React from "react";
import './About.css';

export default function About() {
    return (
        <>
            <div className="background-cba">
                <div className="container about-us-container border pt-4 pb-4 pr-4 pl-4">
                    <div className="image-and-content row animate__animated animate__bounce">
                        <div className="col">
                            <div className="left-section">
                                <img src="https://img.freepik.com/vector-gratis/escena-dia-trabajo-dibujos-animados_23-2148955071.jpg?w=1380&t=st=1701100248~exp=1701100848~hmac=21fb3972e9b67d1330ec7b08b121a447e6bcec91a58d281f80b47b7d26125e77" alt="Imagen 1" />
                                <p className="text-center mt-5"><b>En nuestra tienda en línea, nos esforzamos por brindar productos de alta calidad a precios asequibles. Fundada en 2023, nuestra misión es hacer que la experiencia de compra en línea sea fácil, conveniente y agradable para nuestros clientes.</b></p>
                                <p className="text-center"><b>Nuestro compromiso con la satisfacción del cliente es nuestra principal prioridad. Trabajamos arduamente para ofrecer una amplia gama de productos y un servicio al cliente excepcional.</b></p>
                            </div>
                        </div>
                        <div className="col text-center">
                            <div className="right-section">
                                <h2 className="text-dark"><i className="bi bi-person-bounding-box"></i>  QUIENES SOMOS</h2>
                                <p className="text-center"><b>Somos una empresa de tecnología líder en comercio electrónico y soluciones fintech de América Latina.</b></p>
                                <p className="second-p text-center"><b>Nuestro propósito es democratizar el comercio y los servicios financieros para transformar la vida de millones de personas en la región.</b></p>
                                <img src="https://img.freepik.com/vector-gratis/ilustracion-equipo-masculino_23-2150201042.jpg?w=1380&t=st=1701100249~exp=1701100849~hmac=1896b6b04a01f8091641818b8660650d64824ecb22c6f219310c59546a113b3e" alt="Imagen 2" />
                            </div>
                            <a href="/" className="btn btn-block btn-danger mt-5"><i className="bi bi-backspace"></i> Volver a Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}