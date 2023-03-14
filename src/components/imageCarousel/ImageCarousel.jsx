import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import recomendaciones from "../../assets/json/recomendaciones.json"
import styles from "./ImageCarousel.module.css"
import "./ImageCarouselOverride.css"

const ImageCarousel = ({
    Crimg,
    CategorySingular,
    StarRating,
    Rating,
    Title,
    Description }) => {

    const [dataRecomendaciones, setDataRecomendaciones] = useState(recomendaciones);
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            emulateTouch={true}
            statusFormatter={(current, total) => {
                return "".concat(current, " / ").concat(total);
            }}
        >

            {
                dataRecomendaciones.map((data) => {
                    return (
                        <div className={styles.imageContainer} key={data.Crimg + data.Category}>
                            <img className={styles.image} src={data.Crimg} alt="" />
                        </div>)
                })
            }
        </Carousel>
    );
}

export default ImageCarousel