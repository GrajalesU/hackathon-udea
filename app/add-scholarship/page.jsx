import styles from "../../styles/AddScholarship.module.css";

export default function AddScholarshipPage() {
    return (
        <section className={styles.container}>

        <form action="" className={styles.form}>
          <label className={styles.formElement}>
            <span className={styles.formElementTitle}>Nombre</span>
            <input
              className={styles.formElementInput}
              type="text"
              placeholder="Escribe tu nombre aquí..."
            />
          </label>
          <label className={styles.formElement}>
            <span className={styles.formElementTitle}>Teléfono</span>
            <input
              className={styles.formElementInput}
              type="text"
              placeholder="Escribe tu celular aquí..."
            />
          </label>
          <label className={styles.formElement}>
            <span className={styles.formElementTitle}>Correo</span>
            <input
              className={styles.formElementInput}
              type="email"
              placeholder="Escribe tu correo aquí..."
            />
          </label>

          <button className={styles.formButton} type="submit">
            Enviar
          </button>
        </form>
        </section>
    )
}
