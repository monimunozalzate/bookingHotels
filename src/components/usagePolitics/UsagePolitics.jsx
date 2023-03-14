import React from "react";
import styles from "./UsagePolitics.module.css";

const UsagePolitics = () => {
  return (
    <div className={styles.politicsComponent}>
      <section>
        <h1>Qué tenés que saber</h1>
        <hr />
      </section>
      <section className={styles.rules}>
        <div className={styles.div1}>
          <p>Normas de la casa</p>
          <ul>
            <li>Check out: 10:00</li>
            <li>No se permiten mascotas</li>
            <li>No fumar</li>
          </ul>
        </div>
        <div className={styles.div2}>
          <p>Salud y seguridad</p>
          <ul>
            <li>
              Se aplican las pautas de distanciamiento social y otras normas
              relacionadas con el coronavirus{" "}
            </li>
            <li>Detector de humo</li>
            <li>Depósito de seguridad</li>
          </ul>
        </div>
        <div className={styles.div3}>
          <p>Política de cancelación</p>
          <ul>
            <li>
              Agregá las fechas de tu viaje para obtener los detalles de
              cancelación de esta estadía.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default UsagePolitics;
