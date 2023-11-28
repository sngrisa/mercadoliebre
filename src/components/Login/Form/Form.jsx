import React from 'react';
import "./Form.css";

const Form = ({Users}) => {
    return (
        <>
            <div className='pt-5 pb-5'>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={"./src/assets/users.png"} id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" id="email" className="fadeIn second" name="email" placeholder="Ingrese su correo" />
                            <input type="password" id="password" className="fadeIn third" name="password" placeholder="Ingrese la contraseña" />
                            <input type="submit" className="fadeIn fourth" value="Ingresar" />
                        </form>
                        <div id="formFooter">
                        <h6><b>Aun no se ha registrado?</b></h6>
                            <a className="underlineHover" href="/register"> Cree una cuenta ahora y gratis</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;
