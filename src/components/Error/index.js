import React from "react";
import styles from "./Error.module.css";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
