import React from 'react';
import "./Register.css";
import Form from "./Form/Form";

const Register = () => {
    return (
        <>
            <div className='background-register animate__animated animate__bounceInUp'>
                <div className='container pt-5 pb-5'>
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Register;
