import React from "react";
import "./Index.css";
import Swiper from "../Swiper/Swiper";
import Products from "../Products/Products";
import DolarBox from "../DolarBox/DolarBox";

let Index = () => {

    return (
        <>
            <Swiper />
            <DolarBox />
            <div className="mt-5 container">
                <Products />
            </div>
        </>
    )
}

export default Index;