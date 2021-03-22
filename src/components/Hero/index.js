import React from "react";
import styles from "./Hero.module.css";
import Wrapper from "../Wrapper";
import Formulario from "../Formulario";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Wrapper>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Increibles imágenes gratis para descargar
          </h2>
          <p className={styles.description}>
            Banco de imágenes compartidos por la comunidad de{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              pixabay
            </a>
          </p>

          <Formulario />

          <p className={styles.help}>
            Ejemplos para buscar: mujer, flores, fondos, familia, naturaleza,
            tecnologia, paisaje, oficina
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
