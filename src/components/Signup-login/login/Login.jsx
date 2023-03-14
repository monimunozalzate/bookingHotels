import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../signUp/SignUp";
import style from "./Login.module.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const userData = { email: "braian.redmond@gmail.com", pass: "123456" };

  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.password !== userData.pass || values.email !== userData.email) {
      setPasswordError("Credenciales inválidas. Intente nuevamente");
    } else {
      localStorage.setItem("Logged", JSON.stringify("true"));
      navigate("/");
    }
    setSubmitting(false);
  };

  return (
    <div className={style.background}>
      <div className={style.loginContainer} data-testid="login-container">
        <h2 className={style.loginTitle}>Iniciar Sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={style.divisions}>
                <label htmlFor="email">Correo electrónico</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Correo electronico"
                  style={{ boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)" }}
                />
              </div>
              <div className={style.divisions} style={{ position: "relative" }}>
                <label htmlFor="password">Contraseña</label>
                <Field
                  id="password"
                  name="password"
                  render={({ field }) => (
                    <div className={style.password}>
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        aria-label="Contraseña"
                      />
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        data-testid="password-visibility-button"
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          boxShadow: "none",
                        }}
                      >
                        {showPassword ? (
                          <Visibility
                            data-testid="showPasswordButton"
                            aria-label="Mostrar contraseña"
                          />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </div>
                  )}
                />
                <p className={style.error} data-testid="password-error">
                  {passwordError}
                </p>
              </div>
              <div className={style.containerButton}>
                <button
                  type="submit"
                  className={style.submitButton}
                  disabled={isSubmitting}
                  data-testid="login-button"
                >
                  Ingresar
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p>
          <span>¿Aún no tenés cuenta?</span>{" "}
          <Link to="/signUp" element={<SignUp />}>
            {" "}
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
