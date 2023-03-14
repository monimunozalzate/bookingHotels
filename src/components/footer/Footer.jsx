import React from "react";
import styles from './Footer.module.css'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div data-testid="footer" className={styles.footerContainer}>
        <div className={styles.footerCopyrights} data-testid='footerCopyrights'>
          <p>©2023 Digital Booking</p>
        </div>

        <div className={styles.footerSocialMedia} data-testid='footer-social-media'>
          <BsFacebook />
          <FaLinkedinIn />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
