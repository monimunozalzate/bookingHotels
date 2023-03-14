import React from "react";
import styles from "./ProductDescription.module.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ProductRanking from "../productRanking/ProductRanking";
import { Link } from "react-router-dom";

const ProductDescription = () => {
  return (
    <div className={styles.descriptionContainer}>
      <section className={styles.placeName}>
        <div style={{ display: "flex", flexDirection: "column" , lineHeight:'1.1'}}>
          <p className={styles.type}>hotel</p>
          <h1 className={styles.name}>name</h1>
        </div>
        <Link to="/">
          <ArrowBackIosNewIcon fontSize="large" style={{ color: "white" }} />
        </Link>
      </section>
      <section className={styles.locationInfo}>
        <div className={styles.address}>
          <LocationOnIcon />
          <div className={styles.description}>
            <p>Ciudad, Pais</p>
            <p>Distancia al centro</p>
          </div>
        </div>
        <div>
          <ProductRanking />
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
