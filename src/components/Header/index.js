import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import Wrapper from "../Wrapper";

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.brandLogo}>
          <a href="/">
            <img src={logo} alt="Pexabay logo" />
            <h1 className={styles.titleLogo}>Pexabay</h1>
          </a>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
