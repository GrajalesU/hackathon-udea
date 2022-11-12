import Image from "next/image";
import React from "react";
import searchIcon from "../../../assets/home.png";
import styles from "../../../styles/scholarship/styles.module.css";

async function fetchScholarship(id) {
  const res = await fetch(
    `https://hackaton-udea.herokuapp.com/api/becas/${id}`
  );
  return res.json();
}
export default async function ScholarshipPage({ params }) {
  const { id } = params;
  const scholarship = await fetchScholarship(id);
  return (
    <div>
      <div className={styles.container}>
        <Image width={300} height={300} src={searchIcon} alt="search Icon" />
        <h2 className={styles.containerTitle}>{scholarship.name}</h2>
        <p className={styles.containerText}>{scholarship.description}</p>
        <a
          className={styles.containerLink}
          href={scholarship.link}
          target="_blank"
          rel="noreferrer"
        >
          Ver en la pagina original
        </a>
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
