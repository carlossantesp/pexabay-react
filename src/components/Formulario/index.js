import React from "react";
import styles from "./Formulario.module.css";
import { BsSearch } from "react-icons/bs";

const Formulario = () => {
  return (
    <form className={styles.formulario}>
      <div className={styles.formGroup}>
        <input
          className={styles.formControl}
          type="text"
          placeholder="Buscar imágenes por su nombre"
        />
        <BsSearch className={styles.formIcon} />
      </div>
    </form>
  );
};

export default Formulario;
