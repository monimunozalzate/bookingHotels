import React from 'react'
import styles from './AddDates.module.css'

const AddDates = () => {
  return (
    <div className={styles.addDatesContainer}>
        <p>Agregá tus fechas de viaje para obtener precios exactos</p>
        <button>Iniciar Reserva</button>
    </div>
  )
}

export default AddDates