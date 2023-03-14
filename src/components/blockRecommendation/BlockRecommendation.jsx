import React, { useState } from 'react'
import CardRecomendado from '../cardRecommendation/CardRecommendation'
import recomendaciones from '../../assets/json/recomendaciones'
import styles from './BlockRecommendation.module.css'

const BlockRecomendados = () => {

    const [dataRecomendaciones, setDataRecomendaciones] = useState(recomendaciones);

    return (
        <div className={styles.backgroundContainer}>
            <section className={styles.recomendacionContainer}>
                <h2 className={styles.title}>Recomendaciones</h2>
                    <div className={styles.flexContainer}>
                        {
                            dataRecomendaciones.map((data) => {
                                return <CardRecomendado {...data} key={data.Crimg + data.Category} />
                            })
                        }
                    </div>
            </section>
        </div>
    )
}

export default BlockRecomendados