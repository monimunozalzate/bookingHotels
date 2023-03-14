import classNames from 'classnames';
import React, { useState, useEffect } from 'react'
import recomendaciones from '../../assets/json/recomendaciones'
import styles from "./BlockImages.module.css"
import ImageGallery from '../imageGallery/ImageGallery';

const BlockImages = () => {

    const [dataRecomendaciones, setDataRecomendaciones] = useState(recomendaciones);
    const [fiveImagesOrLessArray, setFiveImagesOrLessArray] = useState([])

    useEffect(() => {
        setFiveImagesOrLessArray(obtainUpToFiveImagesFromProduct(dataRecomendaciones));
    }, []);

    return (
        <div className={styles.blockContainer}>
            <div className={styles.gridContainer}>
                {
                    //Ternary operator that checks if the contents of the array is undefined or has something.
                    //If undefined, it will return a div with a string saying that no image was found
                    //If not undefined, it will map the contents of the array
                    fiveImagesOrLessArray === undefined ? <div className={styles.notFound}> No se encontraron imagenes para este producto</div> :
                    fiveImagesOrLessArray.map((data, index) => {
                        let firstImageClasses = classNames(styles.imageGridCol2, styles.imageGridRow2)
                        return <img className={index === 0 ? firstImageClasses : ""} src={data.Crimg} key={data.Crimg + data.Category} />
                    })
                }
                <ImageGallery />
            </div>
        </div>
    )
}

//Takes the product's array of objects and creates a new array with up to 5 objects
const obtainUpToFiveImagesFromProduct = (arrayObjs) => {
    const newArrayOfObjects = []
    if (arrayObjs.length === 0) {
        return undefined
    }
    for (let i = 0; i < 5; i++) {
        newArrayOfObjects.push(arrayObjs[i]);
    }
    return newArrayOfObjects;
}

export default BlockImages