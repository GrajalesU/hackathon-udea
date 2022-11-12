import Image from "next/image";
import React from "react";
import searchIcon from "../../../assets/Search.png";
import styles from "../../../styles/scholarship/styles.module.css";

export default function ScholarshipPage({ params }) {
  return (
    <div>
      <div>
        <Image width={300} height={300} src={searchIcon} alt="search Icon" />
        <h2>Titulo de la beca</h2>
        <p>
          descripción de la beca Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras efficitur imperdiet pretium. In aliquet turpis
          metus, at cursus neque porttitor ut. Fusce semper lacus sit amet
          viverra sagittis. Aenean condimentum porta facilisis. Quisque
          facilisis vel nisi non finibus. Nullam et lorem nec libero placerat
          pellentesque eu non neque. Donec eu arcu non diam iaculis dictum. Ut
          tortor velit, sollicitudin in massa a, placerat gravida massa. Nulla
          viverra elit at accumsan tincidunt. Ut nec fermentum tellus, at
          placerat ipsum. Sed ligula ligula, placerat vitae imperdiet eget,
          blandit eu arcu. Phasellus vehicula ac ex ac pulvinar.
        </p>
      </div>
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>¿Estás interesado?</h2>
        <p className={styles.contactDescription}>
          Llena el siguiente formulario y la institución se comunicará contigo
          lo más pronto posible
        </p>
        <form action="" className={styles.contactForm}>
          <label className={styles.contactFormElement}>
            <span className={styles.contactFormElementTitle}>Nombre</span>
            <input
              className={styles.contactFormElementInput}
              type="text"
              placeholder="Escribe tu nombre aquí..."
            />
          </label>
          <label className={styles.contactFormElement}>
            <span className={styles.contactFormElementTitle}>Teléfono</span>
            <input
              className={styles.contactFormElementInput}
              type="text"
              placeholder="Escribe tu celular aquí..."
            />
          </label>
          <label className={styles.contactFormElement}>
            <span className={styles.contactFormElementTitle}>Correo</span>
            <input
              className={styles.contactFormElementInput}
              type="email"
              placeholder="Escribe tu correo aquí..."
            />
          </label>

          <button className={styles.contactFormButton} type="submit">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
