import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/scholarships/styles.module.css";
import img from "../assets/home.png";

export default function Scholarship({ id, description, name }) {
  return (
    <li className={styles.scholarsElement}>
      <Image width={64} height={64} src={img} alt="search Icon" />
      <div className={styles.scholarInfo}>
        <h3 className={styles.scholarTitle}>{name}</h3>
        <small className={styles.scholarDescription}>{description}</small>
      </div>
      <button className={styles.scholarBtn}>
        <Link href={`/scholarships/${id}`}>Ver más</Link>
      </button>
    </li>
  );
}
