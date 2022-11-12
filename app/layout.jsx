import React from "react";
import { Roboto } from "@next/font/google";
import styles from "../styles/Header.module.css";
import footerStyles from "../styles/Footer.module.css";

import Link from "next/link";
const font = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: "latin",
});
export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <head>
        <title>Los Linces te guían</title>
      </head>
      <body className={font.className}>
        <header className={styles.header}>
          <h1 className={styles.title}>Los linces te guían</h1>
          <nav className={styles.navigation}>
            <Link className={styles.link} href="/scholarships">
              Becas
            </Link>
            <Link className={styles.link} href="/">
              Principal
            </Link>
          </nav>
        </header>
        {children}
        <footer className={footerStyles.footer}>
          Los Linces INC: Juan Manuel Grajales, Santiago Jaramillo, Andrés Castro, Jhon Quitian.
          <br></br>
          <a href="https://github.com/GrajalesU/hackathon-udea">GitHub Repository</a>
        </footer>
      </body>
    </html>
  );
}
