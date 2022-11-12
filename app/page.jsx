import React from "react";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Presentacion</h2>
        <p>A veces, entre tanta información por la que puedes navegar, puede ser difícil encontrar la beca indicada para ti. En este sitio te ayudaremos a buscar, mediante los filtros que establezcas, esa beca que deseas y que está esperando por ti.</p>
        </div>
      <div className={styles.card}>Me interesa</div>
    </div>
  );
}
