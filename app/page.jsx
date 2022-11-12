import React from "react";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from 'next/image';
import homeGif from '../assets/home.webp';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src={homeGif} alt="Girl reading a book." className={styles.image}/>
        <p>
          A veces, entre tanta información por la que puedes navegar, puede ser
          difícil encontrar la beca indicada para ti. En este sitio te
          ayudaremos a buscar, mediante los filtros que establezcas, esa beca
          que deseas y que está esperando por ti. También, como institución, puedes registrarte y publicar tus propias
          becas.
        </p>
        <div className={styles.btnContainer}>
          <Link className={styles.button} href="/scholarships">
            Ver becas
          </Link>
          <Link className={styles.button} href="/login">
            Soy institución
          </Link>
        </div>
      </div>
    </div>
  );
}
