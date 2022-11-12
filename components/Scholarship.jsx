import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Scholarship({ id, img, description, name }) {
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
