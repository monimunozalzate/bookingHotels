import React from 'react'
import styles from './CardCategory.module.css'

const CardCategoria = ({ id, titulo, descripcion, url_imagen }) => {

    return (
        <article className={styles.card}>
            <img className={styles.placeImage} src={url_imagen} alt={descripcion} />
            <p className={styles.category}>{titulo}</p>
            <p className={styles.placeAmount}>2 {titulo}</p>
        </article>
    );
}

export default CardCategoria