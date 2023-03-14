import React, {useState} from 'react'
import CardCategoria from '../cardCategory/CardCategory'
import categorias from '../../assets/json/categorias.json'
import styles from './BlockCategory.module.css'

const BlockCategorias = () => {
    const [dataCategorias, setDataCategorias] = useState(categorias);

    return (
        <section className={styles.categoriaContainer}>
            <h2 className={styles.title}>Buscar por tipo de alojamiento</h2>
            <div className={styles.flexContainer}>
                {
                    dataCategorias.map((data) => {
                        return <CardCategoria {...data} key={data.id} />
                    })
                }
            </div>
        </section>
    )
}

export default BlockCategorias