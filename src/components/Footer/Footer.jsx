import React from "react";
import "./Footer.css";
import contacto from "../../assets/contacto.png";
import meli from "../../assets/mercadolibre.png";
import alibaba from "../../assets/alibaba.png";
import aliexpress from "../../assets/aliexpress.png";

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-top text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="widget company-intro-widget text-center">
                                    <div className="text-center"><img src={contacto} alt="logo" className="logo-footer logo"/></div>
                                        <h5><i className="bi bi-person-lines-fill"></i> Contacto:</h5>
                                    <ul>
                                        <li>
                                            <p><i className="bi bi-envelope-at-fill"></i> Email: <a href="mailto:mercadolievre@gmail.com">  mercadolievre@gmail.com</a></p>
                                        </li>
                                        <li>
                                            <p><i className="bi bi-telephone-fill"></i> Telefono: <small>(+54) 0800-446-4789</small></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col">
                                <div className="widget course-links-widget">
                                    <h5 className="widget-title"><i className="bi bi-person-rolodex"></i> Páginas amigas:</h5>
                                    <ul className="courses-link-list box">
                                        <li><a href="https://www.mercadolibre.com.ar"><img src={meli} className="aImage"/></a></li>
                                        <li><a href="https://es.aliexpress.com/"><img src={aliexpress} className="aImage"/></a></li>
                                        <li><a href="https://spanish.alibaba.com/g/argentina.html"><img src={alibaba} className="aImage"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center mt-3">
                                <span className="copy-right-text">© 2023 SiG Software. Todos los derechos Reservados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

