import React from "react";
import searchIcon from "../../assets/Search.png";
import Image from "next/image";
import styles from "../../styles/scholarships/styles.module.css";

export default function ScholarsLayout({ children }) {
  return (
    <div>
      <div className={styles.search}>
        <Image width={24} height={24} src={searchIcon} alt="search Icon" />
        <select name="filter" className={styles.searchFilter}>
          <option>Todos</option>
        </select>
        <input
          type="text"
          placeholder="Qué beca estás buscando..."
          className={styles.searchInput}
        />
      </div>
      {children}
    </div>
  );
}
