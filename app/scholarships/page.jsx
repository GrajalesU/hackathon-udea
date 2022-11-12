import Image from "next/image";
import React from "react";
import styles from "../../styles/scholarships/styles.module.css";
import searchIcon from "../../assets/Search.png";
import Scholarship from "../../components/Scholarship";

async function fetchScholarships() {
  const res = await fetch("https://hackaton-udea.herokuapp.com/api/becas");
  return res.json();
}

export default async function ScholarshipListPage() {
  const scholarships = await fetchScholarships();
  return (
    <section className={styles.scholars}>
      <ul className={styles.scholarsList}>
        {scholarships.map((scholarship) => (
          <Scholarship
            key={scholarship.id}
            id={scholarship.id}
            description={scholarship.description}
            name={scholarship.name}
          />
        ))}
      </ul>
    </section>
  );
}
