import React from "react";
import styles from '../header/Header.module.css'
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <header>
      <div data-testid="header" className={styles.headerContainer}>
        <div className={styles.logo}>
        <Link to='/'>
          <img
            src="src\assets\img\logoDb.png"
            alt="Logo Db"
            style={{ width: "71px", height: "52px" }}
          />
          </Link>
          <p>Sentite como en tu hogar</p>
        </div>
        <div className={styles.buttonMobile}>
          <Link to="menuMobile">
            <MenuSharpIcon
              fontSize="large"
              style={{ color: "var(--darkGrey)" }}/>
         </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link to='/signUp'><button>Crear cuenta</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;