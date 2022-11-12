"use client";
import json5 from "json5";
import { useState } from "react";
import styles from "../../styles/AddScholarship.module.css";

export default function AddScholarshipPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    fetch("https://hackaton-udea.herokuapp.com/api/becas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        link,
        endDate: "2022/11/12",
        startDate: "2022/11/12",
        company: 1,
        career: "Educación",
      }),
    });
    setDescription("");
    setLink("");
    setName("");
  };
  

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Publicar beca</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Nombre de la beca</span>
          <input
            className={styles.formElementInput}
            type="text"
            placeholder="Escribe el nombre de la beca aquí..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Descripción</span>
          <input
            className={styles.formElementInput}
            type="text"
            placeholder="Escribe la descripción de la beca aquí..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Link</span>
          <input
            className={styles.formElementInput}
            type="email"
            placeholder="Escribe el link de la beca aquí..."
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Fecha de inicio</span>
          <input
            className={styles.formElementInput}
            type="date"
            placeholder="Escribe la fecha de inicio de la beca aquí..."
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Fecha final</span>
          <input
            className={styles.formElementInput}
            type="date"
            placeholder="Escribe la fecha final de la beca aquí..."
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Institución</span>
          <input
            className={styles.formElementInput}
            type="text"
            placeholder="Escribe el nombre de la institución aquí..."
          />
        </label>
        <label className={styles.formElement}>
          <span className={styles.formElementTitle}>Carrera</span>
          <input
            className={styles.formElementInput}
            type="text"
            placeholder="Escribe el nombre de la carrera aquí..."
          />
        </label>

        <button className={styles.formButton} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}
