import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, event }) => {
  return (
    <button className={styles.btnPrimary} type="button" onClick={event}>
      {children}
    </button>
  );
};

export default Button;
