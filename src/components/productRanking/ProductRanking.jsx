import React, { useState, useEffect } from 'react'
import styles from "./ProductRanking.module.css"
import { useParams } from 'react-router-dom';
import { createStarRatingString } from "../../assets/utils/utils"
import {transformNumberRatingToTextEquivalent} from "../../assets/utils/utils"
import axios from "axios";

const ProductRanking = () => {

    /*const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productUrl, setProductUrl] = useState(`URL/${id}`)
    const [starRatingIconString, setStarRatingIconString] = useState("");
    const [rating, setRating] = useState("");

    const getData = async () => {
        const { data } = await axios.get(productUrl);
        setProduct(data);
    };

    useEffect(() => {
        getData();
        setStarRatingIconString(createStarRatingString(product.StarRating));
        setRating(transformNumberRatingToTextEquivalent(product.Rating));
    },[]);*/

    //{starRatingIconString}
    //{rating}
    //{product.Rating}
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <p className={styles.textContainer}>Muy bueno</p>
                <p className={styles.starContainer}>★★★★★</p>
            </div>
            <div className={styles.numberContainer}>8</div>
        </div>
    )
}

export default ProductRanking