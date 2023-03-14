import React from 'react'
import styles from "./BlockDetailsDescription.module.css"

const BlockDetailsDescription = () => {
    /*let text = "Está situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal. Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes. El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita. El establecimiento sirve un desayuno variado de 07:00 a 10:30."

    separateParagraphs(text);*/

    return (
        <div className={styles.descriptionContainer}>
            <section>
                <h1 className={styles.title}>Alojate en el corazon de Buenos Aires</h1>
                <p className={styles.text}>Está situado a solo unas calles de la avenida
                    Alvear, de la avenida Quintana, del parque San Martín y del distrito de Recoleta. En las inmediaciones también hay varios lugares de interés, como la calle Florida, el centro comercial Galerías Pacífico, la zona de Puerto Madero, la plaza de Mayo y el palacio Municipal.
                    <br />
                    Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
                    <br />
                    El Hotel es un hotel sofisticado de 4 estrellas que goza de una ubicación tranquila, a poca distancia de prestigiosas galerías de arte, teatros, museos y zonas comerciales. Además, hay WiFi gratuita.
                    El establecimiento sirve un desayuno variado de 07:00 a 10:30.
                </p>
            </section>
        </div>
    )
}

/*const separateParagraphs = (string) => {
    let input = string;
    let period = input.indexOf('.');
    let pluginName = input.substring(0, period+1);
    let fileExtension = input.substring(period + 1);
    console.log(pluginName);
}*/

export default BlockDetailsDescription