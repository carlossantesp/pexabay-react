import React, { useState } from "react";
import styles from "./Formulario.module.css";
import { BsSearch } from "react-icons/bs";
import Error from "../Error";
import PropTypes from "prop-types";

const Formulario = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className={styles.formulario}>
      <div className={styles.formGroup}>
        <input
          className={styles.formControl}
          type="text"
          placeholder="Buscar imágenes por su nombre"
          onChange={(e) => setQuery(e.target.value)}
        />
        <BsSearch className={styles.formIcon} />
      </div>
      {error && <Error message="Agrege un consulta de búsqueda" />}
    </form>
  );
};

Formulario.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Formulario;
