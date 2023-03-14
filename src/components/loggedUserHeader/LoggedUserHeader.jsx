import React from 'react'
import styles from "./LoggedUserHeader.module.css"
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useNavigate } from 'react-router-dom';

const LoggedUserHeader = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("Logged");
        navigate("/");
    }

    return (
        <div className={styles.flex}>
            <div className={styles.user}>
                <p className={styles.initials}>BR</p>
            </div>
            <div className={styles.rightText}>
                <p className={styles.userTextTop}>Hola,</p>
                <p className={styles.userTextBottom}>Braian Redmond</p>
            </div>
            <CloseSharpIcon style={{
                index: 50, 
                position: "absolute",
                top: -8,
                right:0,
                }} onClick={handleLogOut} />
        </div>
    )
}

export default LoggedUserHeader