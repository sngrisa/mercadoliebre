import React from "react";
import "./Form.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../services/firebase.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const Form = ({ Users }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);

    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("User donot exist");
          break;
        default:
          console.error(error);
      }
    }
  };
  return (
    <>
      <div>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src={Users} id="icon" alt="User Icon" />
            </div>
            <form
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <input
                label="Email"
                type="email"
                onChange={handleChange}
                name="email"
                value={email}
                placeholder="Ingrese su email"
                required
              />
              <input
                label="Password"
                type="password"
                onChange={handleChange}
                name="password"
                value={password}
                placeholder="Ingrese su contraseña"
                required
              />
              <input type="submit" className="fadeIn fourth" value="Ingresar" />
            </form>
            <div id="formFooter">
              <h6>
                <b>Aun no se ha registrado?</b>
              </h6>
              <a className="underlineHover" href="/register">
                {" "}
                Cree una cuenta ahora y gratis
              </a>
            </div>
          </div>
          <div className="googleSingIn">
            <button className="btnGoogleSingIn" onClick={logGoogleUser}>
              <i className="bi bi-google"></i>
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

// ============= codigo anterior ===========

// import React from "react";
// import "./Form.css";

// export const Form = ({ Users }) => {
//   return (
//     <>
//       <div>
//         <div className="wrapper fadeInDown">
//           <div id="formContent">
//             <div className="fadeIn first">
//               <img src={Users} id="icon" alt="User Icon" />
//             </div>
//             <form>
//               <input
//                 type="text"
//                 id="email"
//                 className="fadeIn second"
//                 name="email"
//                 placeholder="Ingrese su correo"
//               />
//               <input
//                 type="password"
//                 id="password"
//                 className="fadeIn third"
//                 name="password"
//                 placeholder="Ingrese la contraseña"
//               />
//               <input type="submit" className="fadeIn fourth" value="Ingresar" />
//             </form>
//             <div id="formFooter">
//               <h6>
//                 <b>Aun no se ha registrado?</b>
//               </h6>
//               <a className="underlineHover" href="/register">
//                 {" "}
//                 Cree una cuenta ahora y gratis
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Form;
