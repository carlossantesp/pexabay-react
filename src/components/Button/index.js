import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, event }) => {
  return (
    <button className={styles.btnPrimary} type="button" onClick={event}>
      {children}
    </button>
  );
};

Button.propTypes = {
  event: PropTypes.func.isRequired,
};

export default Button;
