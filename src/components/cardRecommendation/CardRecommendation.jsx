import React, { useEffect, useState } from 'react'
import styles from './CardRecommendation.module.css'
import { createStarRatingString, transformNumberRatingToTextEquivalent } from "../../assets/utils/utils"

const CardRecomendado = ({
    Crimg,
    CategorySingular,
    StarRating,
    Rating,
    Title,
    Description }) => {

    const [recommendations, setRecommendations] = useState([]);
    const [shortDescription, setShortDescription] = useState("");
    const [starRatingIconString, setStarRatingIconString] = useState("");
    const [wordRating, setwordRating] = useState("");

    let divStyle = {
        backgroundImage: `url(${Crimg}) `
    };

    //<Link to={`/details/${product.id}`} ></Link>

    useEffect(() => {
        /*axios.get("http://localhost:8090/api/productos/rand")
        .then(res => setRecommendations(res.data.results))*/

        descriptionShortener(Description, setShortDescription);
        setStarRatingIconString(createStarRatingString(StarRating));
        setwordRating(transformNumberRatingToTextEquivalent(Rating));
    }, []);
    //   <img className={styles.imgPlace} src={Crimg} alt={Description} />
    return (
        <article className={styles.card}>
            <div className={styles.leftHalfContainer}>
                <div className={styles.mainImageContainer}>
                    <div className={styles.imgPlace} style={divStyle}></div>
                    <div>
                        <img className={styles.hearthIcon} src="src/assets/img/icons/heartIcon.svg" alt="" />
                    </div>
                </div>

            </div>
            <div className={styles.rightHalfContainer}>
                    <div className={styles.upperFirst}>
                        <div className={styles.upperFirstLeft}>
                            <div className={styles.category}>{CategorySingular}</div>
                            <p className={styles.starRating}>{starRatingIconString}</p>
                        </div>
                        <div className={styles.numberRating}>{Rating}</div>      
                    </div>
                    <div className={styles.upperSecond}>
                        <div className={styles.placeName}>{Title}</div>
                        <div className={styles.wordRating}>{wordRating}</div>
                    </div>
                <div className={styles.upperMediumContainer}>
                    <div>
                        <img className={styles.locationIcon} src="src/assets/img/icons/locationIcon.svg" alt="" />
                    </div>
                        <div className={styles.distance}>A 940 m del centro</div> 
                        <div className={styles.mapUrl}>&nbsp;MOSTRAR EN EL MAPA</div>
                </div>
                <div className={styles.lowerMediumContainer}>
                    <div>
                        <img className={styles.wifiIcon} src="src/assets/img/icons/wifiIcon.svg" alt="" />
                    </div>
                    <div>
                        <img className={styles.swimIcon} src="src/assets/img/icons/swimIcon.svg" alt="" />
                    </div>
                </div>
                <div className={styles.boxDescription}>
                    {shortDescription}
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>Ver&nbsp;más</button>
                </div>
            </div>
        </article>
    );
}


// Takes the StarRating number that comes from the json and turns it into a string of star icons
/*const createStarRatingString = (star) => {
    let singleStar = "★";
    let newStarRatingString = "";
    if (star === "") {
        newStarRatingString += singleStar;
    } else {
        for (let i = 0; i <= star - 1; i++) {
            newStarRatingString += singleStar;
        }
    }
    return newStarRatingString;
}*/

// Takes a string and makes it shorter
const descriptionShortener = (originalDescription, set) => {
    let maxCharText = 80;
    if (screen.width === 414) {
        maxCharText = 80;
    }
    let newShortString = "";
    let masWord = "";
    for (let i = 0; i <= maxCharText; i++) {
        if (originalDescription[i] === undefined) {
            break
        } else {
            newShortString += originalDescription[i]
        }
    }
    //If the string is longer than maxCharText then '...' is added 
    //at the end of the new shorter description
    if (originalDescription[maxCharText + 1] !== undefined) {
        newShortString += "..."
        masWord += " más..."
    }
    //Sets the new modified shorter description inside a variable as jsx
    set(<p>
        <span className={styles.description}>{newShortString}</span>
        <span className={styles.mas}>{masWord}</span>
    </p>);
}


export default CardRecomendado