import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        Diseñado y Desarrollado por{" "}
        <a
          href="https://carlos.santillan.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Carlos Santillan
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
      <p className={styles.gratitude}>
        Api de imagenes por{" "}
        <a
          href="https://pixabay.com/api/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>
      </p>
    </footer>
  );
};

export default Footer;
