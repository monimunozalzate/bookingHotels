import { useState } from "react";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import "./hamburguer.css";
import { Link } from "react-router-dom";

const Hamburguer = ({handleClose}) => {

  return (
    <div className="mobile-menu" >
      <div className="menuUp">
        <section className="upper">
          <CloseSharpIcon onClick={handleClose} />
          <h1>MENÚ</h1>
        </section>

        <section className="middle">
          <Link to="/signUp" onClick={handleClose}>
            <p>Crear cuenta</p>
          </Link>
          <hr />
          <Link to="/login" onClick={handleClose}>
            <p>Iniciar sesión</p>
          </Link>
        </section>
      </div>

      <section className="footer" >
        <BsFacebook />
        <FaLinkedinIn />
        <BsTwitter />
        <BsInstagram />
      </section>
    </div>
  );
};

export default Hamburguer;
