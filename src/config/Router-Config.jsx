import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./../components/About/About";
import Index from "../components/Index/Index";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DetailsProduct from "../components/Details Product/DetailsProduct";

export default function RouterConfig() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products">
                        <Route path=":id" element={<DetailsProduct />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}