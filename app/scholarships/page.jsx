import Image from "next/image";
import React from "react";
import styles from "../../styles/scholarships/styles.module.css";
import searchIcon from "../../assets/Search.png";

export default function ScholarshipListPage() {
  return (
    <section className={styles.scholars}>
      <ul className={styles.scholarsList}>
        <li className={styles.scholarsElement}>
          <Image width={64} height={64} src={searchIcon} alt="search Icon" />
          <div className={styles.scholarInfo}>
            <h3 className={styles.scholarTitle}>Nombre de la beca</h3>
            <small className={styles.scholarDescription}>
              descripción de la beca Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras efficitur imperdiet pretium. In aliquet
              turpis metus, at cursus neque porttitor ut. Fusce semper lacus sit
              amet viverra sagittis. Aenean condimentum porta facilisis. Quisque
              facilisis vel nisi non finibus. Nullam et lorem nec libero
              placerat pellentesque eu non neque. Donec eu arcu non diam iaculis
              dictum. Ut tortor velit, sollicitudin in massa a, placerat gravida
              massa. Nulla viverra elit at accumsan tincidunt. Ut nec fermentum
              tellus, at placerat ipsum. Sed ligula ligula, placerat vitae
              imperdiet eget, blandit eu arcu. Phasellus vehicula ac ex ac
              pulvinar.
            </small>
          </div>
          <button className={styles.scholarBtn}>Ver más</button>
        </li>
        <li className={styles.scholarsElement}>
          <Image width={64} height={64} src={searchIcon} alt="search Icon" />
          <div className={styles.scholarInfo}>
            <h3 className={styles.scholarTitle}>Nombre de la beca</h3>
            <small className={styles.scholarDescription}>
              descripción de la beca Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras efficitur imperdiet pretium. In aliquet
              turpis metus, at cursus neque porttitor ut. Fusce semper lacus sit
              amet viverra sagittis. Aenean condimentum porta facilisis. Quisque
              facilisis vel nisi non finibus. Nullam et lorem nec libero
              placerat pellentesque eu non neque. Donec eu arcu non diam iaculis
              dictum. Ut tortor velit, sollicitudin in massa a, placerat gravida
              massa. Nulla viverra elit at accumsan tincidunt. Ut nec fermentum
              tellus, at placerat ipsum. Sed ligula ligula, placerat vitae
              imperdiet eget, blandit eu arcu. Phasellus vehicula ac ex ac
              pulvinar.
            </small>
          </div>
          <button className={styles.scholarBtn}>Ver más</button>
        </li>
        <li className={styles.scholarsElement}>
          <Image width={64} height={64} src={searchIcon} alt="search Icon" />
          <div className={styles.scholarInfo}>
            <h3 className={styles.scholarTitle}>Nombre de la beca</h3>
            <small className={styles.scholarDescription}>
              descripción de la beca Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Cras efficitur imperdiet pretium. In aliquet
              turpis metus, at cursus neque porttitor ut. Fusce semper lacus sit
              amet viverra sagittis. Aenean condimentum porta facilisis. Quisque
              facilisis vel nisi non finibus. Nullam et lorem nec libero
              placerat pellentesque eu non neque. Donec eu arcu non diam iaculis
              dictum. Ut tortor velit, sollicitudin in massa a, placerat gravida
              massa. Nulla viverra elit at accumsan tincidunt. Ut nec fermentum
              tellus, at placerat ipsum. Sed ligula ligula, placerat vitae
              imperdiet eget, blandit eu arcu. Phasellus vehicula ac ex ac
              pulvinar.
            </small>
          </div>
          <button className={styles.scholarBtn}>Ver más</button>
        </li>
      </ul>
    </section>
  );
}
