import "./DolarBox.css";
import React, { useState, useEffect } from "react";
import getDolarPrice from "./../../services/DolarAPI";

export default function DolarBox() {
  const [dolarPrices, setDolarPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const precios = await getDolarPrice();
        setDolarPrices([
          ...precios,
          ...precios,
          ...precios,
          ...precios,
          ...precios,
          ...precios,
        ]);
      } catch (error) {
        console.error("Error opteniendo los precios del dolar:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dolar-box-container animate__animated animate__fadeInDown">
      <div className="banner">
        {dolarPrices.map((a, index) => {
          if (a.nombre !== "Solidario") {
            return (
              <div className="dolar-item" key={`${a.nombre}-${index}`}>
                <h2 className="dolar-name"><i className="bi bi-cash"></i> Dolar {a.nombre}</h2>
                <br/>
                <h3 className="dolar-price mt-1"><i className="bi bi-cash-coin"></i> Compra: ${a.compra}</h3>
                <h3 className="dolar-price mt-1"><i className="bi bi-cash-coin"></i> Venta: ${a.venta}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

