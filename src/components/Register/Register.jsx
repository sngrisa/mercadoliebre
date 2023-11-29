import React from "react";
import "./Register.scss";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../services/firebase.jsx";

import FormInput from "./Form/Form.jsx";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const reasetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    if (password !== confirmPassword) {
      const error = console.error("Password Incorrect");
      return error;
    }
    if (password.includes(" ")) {
      const error = console.error("Tiene espacios en blanco");
      return error;
    }
    if (password.length <= 5) {
      const error = console.error("Contraseña muy debil mínimo 6 caracteres");
      return error;
    }
    if (!email.includes("@") && !email.includes(".")) {
      const error = console.error("Debes introducir un mail real");
      return error;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });

      reasetFormFields();

      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email ya en uso");
      }
      console.error(error);
    }
  };
  return (
    <>
      <div className="background-register">
        <div className="container">
          <div className="sing-up-container pt-5 pb-5">
            <div className="pt-1 pb-2">
              <div className="form-icon mt-5">
                <span>
                  <i className="bi bi-person-circle"></i>
                </span>
              </div>
              <hr></hr>
              <div className="mt-3 alert alert-dark border">
                <span className="text-dark text-header"><i className="bi bi-info-circle-fill"></i> No tenes una cuenta, registrate con tu Email a continuación</span>
              </div>
            </div>
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <FormInput
                label="Nombre"
                type="text"
                onChange={handleChange}
                name="displayName"
                value={displayName}
                required
              ></FormInput>

              <FormInput
                label="Email"
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                required
              ></FormInput>

              <FormInput
                label="Password"
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                required
              ></FormInput>

              <FormInput
                label="Repetir Password"
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                required
              ></FormInput>
              <div className="row mt-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                <button className="btnCrearCuenta btn btn-block" type="submit">
              <i className="bi bi-person-fill-add"></i> Crear Cuenta
              </button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <a href="/login" className="btn btn-danger btn-block"><i class="bi bi-backspace-fill"></i> Ir al login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

//codigo anterior

// import Form from "./Form/Form";

// const Register = () => {
//     return (
//         <>
//             <div className='background-register'>
//                 <div className='container pt-5 pb-5'>
//                     <Form />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Register;
