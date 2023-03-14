import React from 'react'
import DetailsMap from '../detailsMap/DetailsMap'
import styles from "./BlockMap.module.css"

const BlockMap = () => {
    return (
        <div className={styles.blockMapContainer}>
            <section>
                <h1 className={styles.title}>¿Donde vas a estar?</h1>
                <hr />
                <p className={styles.location}>Buenos Aires, Argentina</p>
            </section>
            <DetailsMap/>
        </div>
    )
}

export default BlockMap